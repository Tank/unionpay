import { pfx2pem } from '../src/utils';

describe('pfx2pem', () => {
  it('should correct trans pfx to pem', async () => {
    const pfxPath = __dirname + '/cer/700000000000001_acp.pfx';
    const pfxPassword = '000000';
    try {
      const res = await pfx2pem(pfxPath, pfxPassword);
      expect(res).toBeTruthy();
    } catch (e) {
      fail(e);
    }
  });

  it('should fail with wrong password', async () => {
    const pfxPath = __dirname + '/cer/700000000000001_acp.pfx';
    const pfxPassword = '000001';
    try {
      await pfx2pem(pfxPath, pfxPassword);
      fail();
    } catch (e) {
      expect(e).toBeTruthy();
    }
  });
});
