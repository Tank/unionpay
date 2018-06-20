

# Hierarchy

**Unionpay**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Unionpay**(pfx: *`string`*, password: *`string`*, merId: *`string`*, cer: *`string`*, backUrl: *`string`*, debug?: *`boolean`*): [Unionpay](_unionpay_.unionpay.md)

*Defined in [Unionpay.ts:35](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/Unionpay.ts#L35)*

构造函数

```ts
import { Unionpay } from '@ycnt/unionpay';

const pfxPath = __dirname + '/cer/700000000000001_acp.pfx';
const pfxPassword = '000000';
const merId = '777290058160513';
const cer = __dirname + '/cer/verify_sign_acp.cer';
const backUrl = 'http://backUrl';

const unionpay = new Unionpay(pfxPath, pfxPassword, merId, cer, backUrl, true);
```

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| pfx | `string` | - |
| password | `string` | - |
| merId | `string` | - |
| cer | `string` | - |
| backUrl | `string` | - |
| `Default value` debug | `boolean` | false |

**Returns:** [Unionpay](_unionpay_.unionpay.md)

___

# Properties

<a id="backurl"></a>

## `<Private>` backUrl

**● backUrl**: *`string`*

*Defined in [Unionpay.ts:73](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/Unionpay.ts#L73)*

后台返回商户结果时使用，如上送，则发送商户后台交易结果通知，如需通过专线通知，需要在通知地址前面加上前缀：专线的首字母加竖线ZX|

___
<a id="cer"></a>

## `<Private>` cer

**● cer**: *`string`*

*Defined in [Unionpay.ts:69](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/Unionpay.ts#L69)*

银联公钥证书Path cer格式

___
<a id="certid"></a>

## `<Private>` certId

**● certId**: *`string`* = ""

*Defined in [Unionpay.ts:35](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/Unionpay.ts#L35)*

___
<a id="debug"></a>

## `<Private>` debug

**● debug**: *`boolean`*

*Defined in [Unionpay.ts:77](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/Unionpay.ts#L77)*

是否为测试账号

___
<a id="merid"></a>

## `<Private>` merId

**● merId**: *`string`*

*Defined in [Unionpay.ts:65](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/Unionpay.ts#L65)*

商户代码

___
<a id="password"></a>

## `<Private>` password

**● password**: *`string`*

*Defined in [Unionpay.ts:61](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/Unionpay.ts#L61)*

商户私钥证书密码

___
<a id="pfx"></a>

## `<Private>` pfx

**● pfx**: *`string`*

*Defined in [Unionpay.ts:57](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/Unionpay.ts#L57)*

商户私钥证书Path pfx格式

___
<a id="privatekey"></a>

## `<Private>` privateKey

**● privateKey**: *`string`* = ""

*Defined in [Unionpay.ts:33](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/Unionpay.ts#L33)*

___
<a id="publickey"></a>

## `<Private>` publicKey

**● publicKey**: *`string`* = ""

*Defined in [Unionpay.ts:34](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/Unionpay.ts#L34)*

___

# Accessors

<a id="apptransreqapi"></a>

##  appTransReqApi

getappTransReqApi():  "https://gateway.95516.com/gateway/api/appTransReq.do" &#124; "https://gateway.test.95516.com/gateway/api/appTransReq.do"

*Defined in [Unionpay.ts:80](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/Unionpay.ts#L80)*

**Returns:**  "https://gateway.95516.com/gateway/api/appTransReq.do" &#124; "https://gateway.test.95516.com/gateway/api/appTransReq.do"

___
<a id="backtransapi"></a>

##  backTransApi

getbackTransApi():  "https://gateway.95516.com/gateway/api/backTransReq.do" &#124; "https://gateway.test.95516.com/gateway/api/backTransReq.do"

*Defined in [Unionpay.ts:88](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/Unionpay.ts#L88)*

**Returns:**  "https://gateway.95516.com/gateway/api/backTransReq.do" &#124; "https://gateway.test.95516.com/gateway/api/backTransReq.do"

___
<a id="fronttransapi"></a>

##  frontTransApi

getfrontTransApi():  "https://gateway.95516.com/gateway/api/frontTransReq.do" &#124; "https://gateway.test.95516.com/gateway/api/frontTransReq.do"

*Defined in [Unionpay.ts:92](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/Unionpay.ts#L92)*

**Returns:**  "https://gateway.95516.com/gateway/api/frontTransReq.do" &#124; "https://gateway.test.95516.com/gateway/api/frontTransReq.do"

___
<a id="querytransapi"></a>

##  queryTransApi

getqueryTransApi():  "https://gateway.95516.com/gateway/api/queryTrans.do" &#124; "https://gateway.test.95516.com/gateway/api/queryTrans.do"

*Defined in [Unionpay.ts:84](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/Unionpay.ts#L84)*

**Returns:**  "https://gateway.95516.com/gateway/api/queryTrans.do" &#124; "https://gateway.test.95516.com/gateway/api/queryTrans.do"

___

# Methods

<a id="apptransreq"></a>

##  appTransReq

▸ **appTransReq**(params: *[IAppTransReqParams](../interfaces/_interfaces_iapptransreqparams_.iapptransreqparams.md)*): `Promise`<`any`>

*Defined in [Unionpay.ts:211](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/Unionpay.ts#L211)*

手机控件支付

1.  使用SDK获取参数tn
2.  在手机APP中设置tn
3.  完成支付
4.  结果发送至backUrl

```ts
import { Unionpay } from '@ycnt/unionpay';

const unionpay = new Unionpay(...);

(async () => {
  try {
    await unionpay.init();
    const res = await unionpay.appTransReq({
      orderId: 'xxx',
      accessType: '0',
      txnAmt: 1,
    });
    console.log(res.tn);
  } catch(e) {
    console.error(e);
  }
})();
```

**Parameters:**

| Param | Type |
| ------ | ------ |
| params | [IAppTransReqParams](../interfaces/_interfaces_iapptransreqparams_.iapptransreqparams.md) |

**Returns:** `Promise`<`any`>

___
<a id="fronttransreq"></a>

##  frontTransReq

▸ **frontTransReq**(params: *[IFrontTransReqParams](../interfaces/_interfaces_ifronttransreqparams_.ifronttransreqparams.md)*, b2b?: *`boolean`*): `object`

*Defined in [Unionpay.ts:157](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/Unionpay.ts#L157)*

网关支付，B2B支付

1.  使用SDK获取参数api和params
2.  在Web页中使用POST表单发送params至api
3.  完成支付
4.  结果发送至backUrl
5.  前端点击跳转至 frontUrl（成功）或 frontFailUrl（失败）

```ts
import { Unionpay } from '@ycnt/unionpay';

const unionpay = new Unionpay(...);

(async () => {
  try {
    await unionpay.init();
    const res = unionpay.frontTransReq({
      orderId: 'xxx',
      accessType: '0',
      txnAmt: 1,
      frontUrl: 'https://frontUrl',
      frontFailUrl: 'https://frontFailUrl',
    });
    console.log(res.api);
    console.log(res.params);
  } catch(e) {
    console.error(e);
  }
})();
```

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| params | [IFrontTransReqParams](../interfaces/_interfaces_ifronttransreqparams_.ifronttransreqparams.md) | - |
| `Default value` b2b | `boolean` | false |

**Returns:** `object`

___
<a id="init"></a>

##  init

▸ **init**(): `Promise`<`void`>

*Defined in [Unionpay.ts:117](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/Unionpay.ts#L117)*

初始化

*   读取并解析pfx文件生成privateKey, cerId。
*   读取cer文件生成publicKey。
*   多次调用不会重复读取解析，可以放心在每次执行业务前调用。

```ts
import { Unionpay } from '@ycnt/unionpay';

const unionpay = new Unionpay(...);

(async () => {
  try {
    await unionpay.init();
  } catch(e) {
    console.error(e);
  }
})();
```

**Returns:** `Promise`<`void`>

___
<a id="query"></a>

##  query

▸ **query**(params: *[IQueryParams](../interfaces/_interfaces_iqueryparams_.iqueryparams.md)*): `Promise`<`any`>

*Defined in [Unionpay.ts:250](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/Unionpay.ts#L250)*

订单查寻

```ts
import { Unionpay } from '@ycnt/unionpay';

const unionpay = new Unionpay(...);

(async () => {
  try {
    await unionpay.init();
    const res = await unionpay.query({
      orderId: 'xxx',
      accessType: '0',
    });
    console.log(res);
  } catch(e) {
    console.error(e);
  }
})();
```

**Parameters:**

| Param | Type |
| ------ | ------ |
| params | [IQueryParams](../interfaces/_interfaces_iqueryparams_.iqueryparams.md) |

**Returns:** `Promise`<`any`>

___
<a id="refund"></a>

##  refund

▸ **refund**(params: *[IRefundParams](../interfaces/_interfaces_irefundparams_.irefundparams.md)*): `Promise`<`any`>

*Defined in [Unionpay.ts:291](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/Unionpay.ts#L291)*

退款

```ts
import { Unionpay } from '@ycnt/unionpay';

const unionpay = new Unionpay(...);

(async () => {
  try {
    await unionpay.init();
    const res = await unionpay.refund({
      orderId: 'xxx',
      accessType: '0',
      txnAmt: 1,
      origQryId: 'xxx',
    });
    console.log(res);
  } catch(e) {
    console.error(e);
  }
})();
```

**Parameters:**

| Param | Type |
| ------ | ------ |
| params | [IRefundParams](../interfaces/_interfaces_irefundparams_.irefundparams.md) |

**Returns:** `Promise`<`any`>

___
<a id="request"></a>

## `<Private>` request

▸ **request**(api: *`string`*, params: *`any`*): `Promise`<`any`>

*Defined in [Unionpay.ts:366](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/Unionpay.ts#L366)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| api | `string` |
| params | `any` |

**Returns:** `Promise`<`any`>

___
<a id="sign"></a>

## `<Private>` sign

▸ **sign**(params: *`any`*): `void`

*Defined in [Unionpay.ts:352](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/Unionpay.ts#L352)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| params | `any` |

**Returns:** `void`

___
<a id="verify"></a>

##  verify

▸ **verify**(params: *`any`*): `boolean`

*Defined in [Unionpay.ts:334](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/Unionpay.ts#L334)*

后台通知验签，本例使用[koa](https://koajs.com)和[koa-better-body](https://github.com/tunnckoCore/koa-better-body)

```ts
import { Unionpay } from '@ycnt/unionpay';

const unionpay = new Unionpay(...);

public webhook = async (ctx: IContext) => {
  try {
    await unionpay.init();
    if (!unionpay.verify(ctx.request.fields)) throw new Error('签名错误');
    if (ctx.request.fields.origQryId) {
      // 这里处理退款
    } else {
      // 这里处理支付成功
    }
    ctx.status = 200;
    ctx.body = 'SUCCESS';
  } catch (e) {
    console.error(e);
    ctx.body = 'FAIL';
  }
};
```

**Parameters:**

| Param | Type |
| ------ | ------ |
| params | `any` |

**Returns:** `boolean`

___

