import { createHash, createSign, createVerify } from 'crypto';
import { readFileSync } from 'fs';
import { encode } from 'iconv-lite';
import * as moment from 'moment';
import * as rp from 'request-promise';
import { isArray } from 'util';

import { h2d, pfx2pem } from './utils';
import {
  IFrontTransReqParams,
  IAppTransReqParams,
  IQueryParams,
  IRefundParams,
} from './interfaces';
import {
  debugapi_appTransReq,
  api_appTransReq,
  debugapi_queryTransReq,
  api_queryTransReq,
  debugapi_backTransReq,
  api_backTransReq,
  debugapi_frontTransReq,
  api_frontTransReq,
} from './apis';
import {
  configFrontParams,
  configAppParams,
  configQueryParams,
  configRefundParams,
} from './configParams';

export class Unionpay {
  private privateKey: string = '';
  private publicKey: string = '';
  private certId: string = '';

  /**
   * 构造函数
   *
   * ```ts
   * import { Unionpay } from '@ycnt/unionpay';
   *
   * const pfxPath = __dirname + '/cer/700000000000001_acp.pfx';
   * const pfxPassword = '000000';
   * const merId = '777290058160513';
   * const cer = __dirname + '/cer/verify_sign_acp.cer';
   * const backUrl = 'http://backUrl';
   *
   * const unionpay = new Unionpay(pfxPath, pfxPassword, merId, cer, backUrl, true);
   *
   * ```
   */
  constructor(
    /**
     * 商户私钥证书Path pfx格式
     */
    private pfx: string,
    /**
     * 商户私钥证书密码
     */
    private password: string,
    /**
     * 商户代码
     */
    private merId: string,
    /**
     * 银联公钥证书Path cer格式
     */
    private cer: string,
    /**
     * 后台返回商户结果时使用，如上送，则发送商户后台交易结果通知，如需通过专线通知，需要在通知地址前面加上前缀：专线的首字母加竖线ZX|
     */
    private backUrl: string,
    /**
     * 是否为测试账号
     */
    private debug: boolean = false
  ) { }

  public get appTransReqApi() {
    return this.debug ? debugapi_appTransReq : api_appTransReq;
  }

  public get queryTransApi() {
    return this.debug ? debugapi_queryTransReq : api_queryTransReq;
  }

  public get backTransApi() {
    return this.debug ? debugapi_backTransReq : api_backTransReq;
  }

  public get frontTransApi() {
    return this.debug ? debugapi_frontTransReq : api_frontTransReq;
  }

  /**
   * 初始化
   * - 读取并解析pfx文件生成privateKey, cerId。
   * - 读取cer文件生成publicKey。
   * - 多次调用不会重复读取解析，可以放心在每次执行业务前调用。
   *
   * ```ts
   * import { Unionpay } from '@ycnt/unionpay';
   *
   * const unionpay = new Unionpay(...);
   *
   * (async () => {
   *   try {
   *     await unionpay.init();
   *   } catch(e) {
   *     console.error(e);
   *   }
   * })();
   *
   * ```
   */
  public async init() {
    if (this.certId && this.publicKey && this.privateKey) return;
    const pem = await pfx2pem(this.pfx, this.password);
    this.privateKey = pem.key;
    this.certId = h2d(pem.attributes.serial);
    this.publicKey = readFileSync(this.cer).toString();
  }

  /**
   * 网关支付，B2B支付
   * 1. 使用SDK获取参数api和params
   * 2. 在Web页中使用POST表单发送params至api
   * 3. 完成支付
   * 4. 结果发送至backUrl
   * 5. 前端点击跳转至 frontUrl（成功）或 frontFailUrl（失败）
   *
   * ```ts
   * import { Unionpay } from '@ycnt/unionpay';
   *
   * const unionpay = new Unionpay(...);
   *
   * (async () => {
   *   try {
   *     await unionpay.init();
   *     const res = unionpay.frontTransReq({
   *       orderId: 'xxx',
   *       accessType: '0',
   *       txnAmt: 1,
   *       frontUrl: 'https://frontUrl',
   *       frontFailUrl: 'https://frontFailUrl',
   *     });
   *     console.log(res.api);
   *     console.log(res.params);
   *   } catch(e) {
   *     console.error(e);
   *   }
   * })();
   *
   * ```
   */
  public frontTransReq(
    params: IFrontTransReqParams, 
    /**
     * 是否使用B2B支付
     */
    b2b: boolean = false,
  ) {
    const txnTime = moment().format('YYYYMMDDHHmmss');
    const reqParams = Object.assign(
      {
        txnTime,
        certId: this.certId,
        merId: this.merId,
        backUrl: this.backUrl,
      },
      params,
      configFrontParams
    );
    if (b2b) reqParams.bizType = '000202';
    this.sign(reqParams);
    return {
      api: this.frontTransApi,
      params: reqParams,
    };
  }

  /**
   * 手机控件支付
   * 1. 使用SDK获取参数tn
   * 2. 在手机APP中设置tn
   * 3. 完成支付
   * 4. 结果发送至backUrl
   *
   * ```ts
   * import { Unionpay } from '@ycnt/unionpay';
   *
   * const unionpay = new Unionpay(...);
   *
   * (async () => {
   *   try {
   *     await unionpay.init();
   *     const res = await unionpay.appTransReq({
   *       orderId: 'xxx',
   *       accessType: '0',
   *       txnAmt: 1,
   *     });
   *     console.log(res.tn);
   *   } catch(e) {
   *     console.error(e);
   *   }
   * })();
   *
   * ```
   */
  public appTransReq(params: IAppTransReqParams) {
    const txnTime = moment().format('YYYYMMDDHHmmss');
    const reqParams = Object.assign(
      {
        txnTime,
        certId: this.certId,
        merId: this.merId,
        backUrl: this.backUrl,
      },
      params,
      configAppParams
    );
    this.sign(reqParams);
    return this.request(this.appTransReqApi, reqParams);
  }

  /**
   * 订单查寻
   *
   * ```ts
   * import { Unionpay } from '@ycnt/unionpay';
   *
   * const unionpay = new Unionpay(...);
   *
   * (async () => {
   *   try {
   *     await unionpay.init();
   *     const res = await unionpay.query({
   *       orderId: 'xxx',
   *       accessType: '0',
   *     });
   *     console.log(res);
   *   } catch(e) {
   *     console.error(e);
   *   }
   * })();
   *
   * ```
   */
  public query(params: IQueryParams) {
    const txnTime = moment().format('YYYYMMDDHHmmss');
    const reqParams = Object.assign(
      {
        txnTime,
        certId: this.certId,
        merId: this.merId,
        backUrl: this.backUrl,
      },
      params,
      configQueryParams
    );
    this.sign(reqParams);
    return this.request(this.queryTransApi, reqParams);
  }

  /**
   * 退款
   *
   * ```ts
   * import { Unionpay } from '@ycnt/unionpay';
   *
   * const unionpay = new Unionpay(...);
   *
   * (async () => {
   *   try {
   *     await unionpay.init();
   *     const res = await unionpay.refund({
   *       orderId: 'xxx',
   *       accessType: '0',
   *       txnAmt: 1,
   *       origQryId: 'xxx',
   *     });
   *     console.log(res);
   *   } catch(e) {
   *     console.error(e);
   *   }
   * })();
   *
   * ```
   */
  public refund(params: IRefundParams) {
    const txnTime = moment().format('YYYYMMDDHHmmss');
    const reqParams = Object.assign(
      {
        txnTime,
        certId: this.certId,
        merId: this.merId,
        backUrl: this.backUrl,
      },
      params,
      configRefundParams
    );
    this.sign(reqParams);
    return this.request(this.backTransApi, reqParams);
  }

  /**
   * 后台通知验签，本例使用[koa](https://koajs.com)和[koa-better-body](https://github.com/tunnckoCore/koa-better-body)
   *
   * ```ts
   * import { Unionpay } from '@ycnt/unionpay';
   *
   * const unionpay = new Unionpay(...);
   *
   * public webhook = async (ctx: IContext) => {
   *   try {
   *     await unionpay.init();
   *     if (!unionpay.verify(ctx.request.fields)) throw new Error('签名错误');
   *     if (ctx.request.fields.origQryId) {
   *       // 这里处理退款
   *     } else {
   *       // 这里处理支付成功
   *     }
   *     ctx.status = 200;
   *     ctx.body = 'SUCCESS';
   *   } catch (e) {
   *     console.error(e);
   *     ctx.body = 'FAIL';
   *   }
   * };
   *
   * ```
   */
  public verify(params) {
    const obj = Object.assign({}, params);
    const signature = obj.signature;
    delete obj.signature;
    const str = Object.keys(obj)
      .sort()
      .map(k => `${k}=${obj[k]}`)
      .join('&');
    const buff = encode(str, 'utf-8');
    const ss1 = createHash('sha1')
      .update(buff)
      .digest('hex');

    const verifier = createVerify('RSA-SHA1');
    verifier.update(ss1);
    return verifier.verify(this.publicKey, signature, 'base64');
  }

  private sign(params) {
    const str = Object.keys(params)
      .sort()
      .map(k => `${k}=${params[k]}`)
      .join('&');
    const buff = encode(str, 'utf-8');
    const ss1 = createHash('sha1')
      .update(buff)
      .digest('hex');
    params.signature = createSign('RSA-SHA1')
      .update(ss1)
      .sign(this.privateKey, 'base64');
  }

  private async request(api: string, params: any) {
    const requestOptions: rp.RequestPromiseOptions = {
      method: 'POST',
      form: params,
      rejectUnauthorized: false,
      resolveWithFullResponse: true,
      json: true,
    };
    const res = await rp(api, requestOptions);
    const obj = res.body
      .split('&')
      .map(x => {
        const [key, remain] = x.split(/=/);
        const value = isArray(remain) ? remain.join('=') : remain;
        return [key, value];
      })
      .reduce((a, b) => {
        a[b[0]] = b[1];
        return a;
      }, {});
    if (obj.respCode !== '00') throw obj.respMsg;
    return obj;
  }
}
