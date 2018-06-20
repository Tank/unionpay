
[![Build Status](https://travis-ci.org/yc-node-typescript/unionpay.svg?branch=master)](https://travis-ci.org/yc-node-typescript/unionpay.svg?branch=master) [![Coverage Status](https://coveralls.io/repos/github/yc-node-typescript/unionpay/badge.svg?branch=master)](https://coveralls.io/github/yc-node-typescript/unionpay?branch=master) [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

介绍
--

中国银联支付开放平台 Nodejs SDK, 适用于API版本5.0.0

> 申请测试地址：[https://open.unionpay.com/ajweb/index](https://open.unionpay.com/ajweb/index)

目前支持

*   [网关支付](https://open.unionpay.com/ajweb/product/newProDetail?proId=1)
*   [手机控件支付](https://open.unionpay.com/ajweb/product/newProDetail?proId=3)
*   订单查寻
*   退款

安装
--

```bash
npm i -S @ycnt/unionpay
```

或

```bash
yarn add @ycnt/unionpay
```

使用例子
----

#### APP下单

```ts
import { Unionpay } from '@ycnt/unionpay';

const pfxPath = __dirname + '/cer/700000000000001_acp.pfx';
const pfxPassword = '000000';
const merId = '777290058160513';
const cer = __dirname + '/cer/verify_sign_acp.cer';
const backUrl = 'http://backUrl';

const unionpay = new Unionpay(pfxPath, pfxPassword, merId, cer, backUrl, true);

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

#### 网关支付，B2B支付下单

```ts
import { Unionpay } from '@ycnt/unionpay';

const pfxPath = __dirname + '/cer/700000000000001_acp.pfx';
const pfxPassword = '000000';
const merId = '777290058160513';
const cer = __dirname + '/cer/verify_sign_acp.cer';
const backUrl = 'http://backUrl';

const unionpay = new Unionpay(pfxPath, pfxPassword, merId, cer, backUrl, true);

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

#### 订单查寻

```ts
import { Unionpay } from '@ycnt/unionpay';

const pfxPath = __dirname + '/cer/700000000000001_acp.pfx';
const pfxPassword = '000000';
const merId = '777290058160513';
const cer = __dirname + '/cer/verify_sign_acp.cer';
const backUrl = 'http://backUrl';

const unionpay = new Unionpay(pfxPath, pfxPassword, merId, cer, backUrl, true);

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

#### 退款

```ts
import { Unionpay } from '@ycnt/unionpay';

const pfxPath = __dirname + '/cer/700000000000001_acp.pfx';
const pfxPassword = '000000';
const merId = '777290058160513';
const cer = __dirname + '/cer/verify_sign_acp.cer';
const backUrl = 'http://backUrl';

const unionpay = new Unionpay(pfxPath, pfxPassword, merId, cer, backUrl, true);

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

#### 验签

后台通知验签，本例使用 [koa](https://koajs.com) 和 [koa-better-body](https://github.com/tunnckoCore/koa-better-body)

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

Summary
-------

[/docs/SUMMARY.md](https://github.com/yc-node-typescript/unionpay/blob/master/docs/SUMMARY.md)

