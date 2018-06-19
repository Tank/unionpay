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
      privateKey: '-----BEGIN PRIVATE KEY-----\nMIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAJC/IUYwaQrGiOJfZVSRe+7qY0mT\n9rIdEdejso7ELehAT5Bk+TbgycFPl6qfumbHGRnYrLk0oI33XgsQ8n7r5dq0MQjFTtlcMdC4Zrr9\nDlbfmWH1oL4ztQtnx5aMgoz7OWdLkytQ4wvwSm+gRMKcLZXdh+Azjm1MhcQSjcOTHlFbAgMBAAEC\ngYA/0XU7PBbkIFqz7DmCCs7orMDv7OPk7foy6ELOvWI8NzadRFe4wW1S5OPK37fQntHLWoP0+GYd\nkcYN/P/dw+ZIWDE6YSS9z/E3RMY1835Zl1xz+fXoMq85Rd8RQTWfHSDpQ8/cwjzpNohf5yYcW5Ih\n9GBwU6PX73GzHwO1iRVVmQJBAMgLDOWrd4PDs37OQEKJ79SG8Y5PGM+lkfKNpHfP0JYERPLPDdYz\nemAHEVp9hejZp3sdSNibtsIgz1sMHoO5+tcCQQC5PFTtedbySEpWpqzOV6tYT2iGECCfoQxHiLc9\nylgUXyt3PgBZB+eB1+ECj1QBFbSCM4x716+cG6ntEs40zHEdAkEAlLlCeW4liNzykhAdTlrm54b8\nB+VeeOKLw1zzLfBfD2lVKYAutVXIYaRfjntMF3XaQnnfMstx8JocD4DPHvgiOQJAQp246UKlE7L9\n0RXWFcsfmv3L2FLaeK4BbYR0aetoK8NiLVsF4v7duit6B2KmUlGM/jotrqgNxrWIMfNOZ1yS3QJA\nVK7437NWnPnzYlxE7VUtK5DP1YOWK+2UzwIlbhe2irVx4oMhudgKQZYrJ+WmAjvtzGBHO/2mHS8T\niv0uapTCwQ==\n-----END PRIVATE KEY-----',
      publicKey: '-----BEGIN CERTIFICATE-----\r\nMIIEQzCCAyugAwIBAgIFEBJJZVgwDQYJKoZIhvcNAQEFBQAwWDELMAkGA1UEBhMC\r\nQ04xMDAuBgNVBAoTJ0NoaW5hIEZpbmFuY2lhbCBDZXJ0aWZpY2F0aW9uIEF1dGhv\r\ncml0eTEXMBUGA1UEAxMOQ0ZDQSBURVNUIE9DQTEwHhcNMTcxMTAxMDcyNDA4WhcN\r\nMjAxMTAxMDcyNDA4WjB3MQswCQYDVQQGEwJjbjESMBAGA1UEChMJQ0ZDQSBPQ0Ex\r\nMQ4wDAYDVQQLEwVDVVBSQTEUMBIGA1UECxMLRW50ZXJwcmlzZXMxLjAsBgNVBAMU\r\nJTA0MUBaMjAxNy0xMS0xQDAwMDQwMDAwOlNJR05AMDAwMDAwMDEwggEiMA0GCSqG\r\nSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDDIWO6AESrg+34HgbU9mSpgef0sl6avr1d\r\nbD/IjjZYM63SoQi3CZHZUyoyzBKodRzowJrwXmd+hCmdcIfavdvfwi6x+ptJNp9d\r\nEtpfEAnJk+4quriQFj1dNiv6uP8ARgn07UMhgdYB7D8aA1j77Yk1ROx7+LFeo7rZ\r\nDdde2U1opPxjIqOPqiPno78JMXpFn7LiGPXu75bwY2rYIGEEImnypgiYuW1vo9UO\r\nG47NMWTnsIdy68FquPSw5FKp5foL825GNX3oJSZui8d2UDkMLBasf06Jz0JKz5AV\r\nblaI+s24/iCfo8r+6WaCs8e6BDkaijJkR/bvRCQeQpbX3V8WoTLVAgMBAAGjgfQw\r\ngfEwHwYDVR0jBBgwFoAUz3CdYeudfC6498sCQPcJnf4zdIAwSAYDVR0gBEEwPzA9\r\nBghggRyG7yoBATAxMC8GCCsGAQUFBwIBFiNodHRwOi8vd3d3LmNmY2EuY29tLmNu\r\nL3VzL3VzLTE0Lmh0bTA5BgNVHR8EMjAwMC6gLKAqhihodHRwOi8vdWNybC5jZmNh\r\nLmNvbS5jbi9SU0EvY3JsMjQ4NzIuY3JsMAsGA1UdDwQEAwID6DAdBgNVHQ4EFgQU\r\nmQQLyuqYjES7qKO+zOkzEbvdFwgwHQYDVR0lBBYwFAYIKwYBBQUHAwIGCCsGAQUF\r\nBwMEMA0GCSqGSIb3DQEBBQUAA4IBAQAujhBuOcuxA+VzoUH84uoFt5aaBM3vGlpW\r\nKVMz6BUsLbIpp1ho5h+LaMnxMs6jdXXDh/du8X5SKMaIddiLw7ujZy1LibKy2jYi\r\nYYfs3tbZ0ffCKQtv78vCgC+IxUUurALY4w58fRLLdu8u8p9jyRFHsQEwSq+W5+bP\r\nMTh2w7cDd9h+6KoCN6AMI1Ly7MxRIhCbNBL9bzaxF9B5GK86ARY7ixkuDCEl4XCF\r\nJGxeoye9R46NqZ6AA/k97mJun//gmUjStmb9PUXA59fR5suAB5o/5lBySZ8UXkrI\r\npp/iLT8vIl1hNgLh0Ghs7DBSx99I+S3VuUzjHNxL6fGRhlix7Rb8\r\n-----END CERTIFICATE-----',
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