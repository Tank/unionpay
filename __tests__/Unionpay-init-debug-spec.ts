import { Unionpay } from '../src';
import {
  debugapi_appTransReq,
  debugapi_backTransReq,
  debugapi_frontTransReq,
  debugapi_queryTransReq,
} from '../src/apis';

describe('Unionpay init debug', () => {
  const pfxPath = __dirname + '/cer/700000000000001_acp.pfx';
  const pfxPassword = '000000';
  const merId = '777290058160513';
  const cer = __dirname + '/cer/verify_sign_acp.cer';
  const backUrl = 'http://backUrl';

  let unionpay: Unionpay;

  beforeAll(async () => {
    unionpay = new Unionpay(pfxPath, pfxPassword, merId, cer, backUrl, true);

    try {
      await unionpay.init();
    } catch (e) {
      fail(e);
    }
  });

  it('should init', async () => {
    expect(unionpay).toMatchObject({
      pfx: pfxPath,
      password: pfxPassword,
      merId: merId,
      cer: cer,
      backUrl: backUrl,
      debug: true,
      certId: '40220995861346480087409489142384722381',
    });
  });

  it('should get correct api', () => {
    expect(unionpay.appTransReqApi).toBe(debugapi_appTransReq);
    expect(unionpay.backTransApi).toBe(debugapi_backTransReq);
    expect(unionpay.frontTransApi).toBe(debugapi_frontTransReq);
    expect(unionpay.queryTransApi).toBe(debugapi_queryTransReq);
  });

  it('should request app correct', async () => {
    try {
      const orderId = 'UPDEBUG' + new Date().getTime();
      const resATR = await unionpay.appTransReq({
        orderId,
        accessType: '0',
        txnAmt: 1,
      });
      expect(resATR.respCode).toBe('00');
      expect(resATR.tn).toBeTruthy();

      const resQuery = await unionpay.query({
        orderId,
        accessType: '0',
      });
      expect(resQuery.respCode).toBe('00');

      await unionpay.refund({
        orderId: 'X' + orderId,
        accessType: '0',
        txnAmt: 1,
        origQryId: 'xxx',
      });
      fail();
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });

  it('should request front correct', async () => {
    try {
      const orderId = 'UPDEBUG' + new Date().getTime();
      const resFTR = unionpay.frontTransReq({
        orderId,
        accessType: '0',
        txnAmt: 1,
        frontUrl: '',
        frontFailUrl: '',
      });
      expect(resFTR).toBeTruthy();
    } catch (e) {
      fail(e);
    }
  });

  it('should request b2b correct', async () => {
    try {
      const orderId = 'UPDEBUG' + new Date().getTime();
      const resFTR = unionpay.frontTransReq({
        orderId,
        accessType: '0',
        txnAmt: 1,
        frontUrl: '',
        frontFailUrl: '',
      }, true);
      expect(resFTR).toBeTruthy();
    } catch (e) {
      fail(e);
    }
  });

  it('should verify correct', () => {
    const params = {
      accNo: '6216***********0018',
      accessType: '0',
      bizType: '000201',
      certId: '69026276696',
      currencyCode: '156',
      encoding: 'UTF-8',
      merId: '777290058160513',
      orderId: '5b20d4fc97411236b0104e26',
      queryId: '181806191545370644028',
      reqReserved: 'kuyoonjo',
      respCode: '00',
      respMsg: 'Success!',
      settleAmt: '1',
      settleCurrencyCode: '156',
      settleDate: '0619',
      signMethod: '01',
      traceNo: '064402',
      traceTime: '0619154537',
      txnAmt: '1',
      txnSubType: '01',
      txnTime: '20180619154537',
      txnType: '01',
      version: '5.0.0',
      signature:
        'N3jydGMUwEEaCTL1pX27pQElA+MSu+VidpohEWlotMtFcI9sJZmCTtCOX/ZVmoAbUxJ81uP9saIdU+IedFNIXp4v/+ESb3oO4vsSRNQiIUng/z8vbOScFfdFtwmO11LFMxKRS9En911ivzGL5b3oL9jb7qEAQAfwJP3jEqx1+qkwn+RIeM6tssI7tpcDkd2jDboncBZNyuMDfMOwgu4T33Z9DSBux+ZDldPS5ShyY9Nq2XwUMbeuIhU8lKZFtXN3PJbdYUJIKxofaIOLhPIbl2VzyaDgzc8ovIdD6XaPJOZfwoNBVAOntgfTy24gPyWsDs7lZ14Fpd9QzkWAEYnueQ==',
    };

    const verified = unionpay.verify(params);
    expect(verified).toBe(true);
  });
});
