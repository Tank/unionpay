import { Unionpay } from '../src';
import { api_appTransReq, api_backTransReq, api_frontTransReq, api_queryTransReq } from '../src/apis';

describe('Unionpay init prod', () => {
  const pfxPath = __dirname + '/cer/700000000000001_acp.pfx';
  const pfxPassword = '000000';
  const merId = '777290058160513';
  const cer = __dirname + '/cer/verify_sign_acp.cer';
  const backUrl = 'http://backUrl';

  let unionpay: Unionpay;

  beforeAll(async () => {
    unionpay = new Unionpay(
      pfxPath,
      pfxPassword,
      merId,
      cer,
      backUrl,
      false,
    );

    try {
      await unionpay.init();
    } catch(e) {
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
      debug: false,
      certId: '40220995861346480087409489142384722381',
    });
  });  
  
  it('should get correct api', async () => {
    expect(unionpay.appTransReqApi).toBe(api_appTransReq);
    expect(unionpay.backTransApi).toBe(api_backTransReq);
    expect(unionpay.frontTransApi).toBe(api_frontTransReq);
    expect(unionpay.queryTransApi).toBe(api_queryTransReq);
  });
});

describe('Unionpay init default', () => {
  const pfxPath = __dirname + '/cer/700000000000001_acp.pfx';
  const pfxPassword = '000000';
  const merId = '777290058160513';
  const cer = __dirname + '/cer/verify_sign_acp.cer';
  const backUrl = 'http://backUrl';

  let unionpay: Unionpay;

  beforeAll(async () => {
    unionpay = new Unionpay(
      pfxPath,
      pfxPassword,
      merId,
      cer,
      backUrl,
    );
  });
  
  it('should use prod', async () => {
    expect(unionpay.appTransReqApi).toBe(api_appTransReq);
    expect(unionpay.backTransApi).toBe(api_backTransReq);
    expect(unionpay.frontTransApi).toBe(api_frontTransReq);
    expect(unionpay.queryTransApi).toBe(api_queryTransReq);
  });
});