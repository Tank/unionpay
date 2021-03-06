

# Hierarchy

**IAppTransReqParams**

# Properties

<a id="accno"></a>

## `<Optional>` accNo

**● accNo**: * `undefined` &#124; `string`
*

*Defined in [interfaces/IAppTransReqParams.ts:53](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/interfaces/IAppTransReqParams.ts#L53)*

账号 1、 后台类消费交易时上送全卡号或卡号后4位 2、 跨行收单且收单机构收集银行卡信息时上送 3、前台类交易可通过配置后返回，卡号可选上送

___
<a id="accsplitdata"></a>

## `<Optional>` accSplitData

**● accSplitData**: * `undefined` &#124; `string`
*

*Defined in [interfaces/IAppTransReqParams.ts:73](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/interfaces/IAppTransReqParams.ts#L73)*

分账域

___
<a id="accesstype"></a>

##  accessType

**● accessType**: * `string` &#124; `number`
*

*Defined in [interfaces/IAppTransReqParams.ts:10](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/interfaces/IAppTransReqParams.ts#L10)*

接入类型 0：普通商户直连接入 2：平台类商户接入

___
<a id="ctrlrule"></a>

## `<Optional>` ctrlRule

**● ctrlRule**: * `undefined` &#124; `string`
*

*Defined in [interfaces/IAppTransReqParams.ts:83](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/interfaces/IAppTransReqParams.ts#L83)*

控制规则 32位01字符串控制位，从左至右第四位取值为1时表示需要强制分期处理

___
<a id="customerinfo"></a>

## `<Optional>` customerInfo

**● customerInfo**: * `undefined` &#124; `string`
*

*Defined in [interfaces/IAppTransReqParams.ts:98](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/interfaces/IAppTransReqParams.ts#L98)*

银行卡验证信息及身份信息

___
<a id="defaultpaytype"></a>

## `<Optional>` defaultPayType

**● defaultPayType**: * `undefined` &#124; `string`
*

*Defined in [interfaces/IAppTransReqParams.ts:88](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/interfaces/IAppTransReqParams.ts#L88)*

默认支付方式 取值参考数据元说明

___
<a id="fronturl"></a>

## `<Optional>` frontUrl

**● frontUrl**: * `undefined` &#124; `string`
*

*Defined in [interfaces/IAppTransReqParams.ts:45](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/interfaces/IAppTransReqParams.ts#L45)*

前台通知地址 前台返回商户结果时使用，前台类交易需上送

___
<a id="instaltransinfo"></a>

## `<Optional>` instalTransInfo

**● instalTransInfo**: * `undefined` &#124; `string`
*

*Defined in [interfaces/IAppTransReqParams.ts:40](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/interfaces/IAppTransReqParams.ts#L40)*

分期付款信息域

___
<a id="issinsno"></a>

## `<Optional>` issInsNo

**● issInsNo**: * `undefined` &#124; `string`
*

*Defined in [interfaces/IAppTransReqParams.ts:68](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/interfaces/IAppTransReqParams.ts#L68)*

发卡机构代码

___
<a id="orderdesc"></a>

## `<Optional>` orderDesc

**● orderDesc**: * `undefined` &#124; `string`
*

*Defined in [interfaces/IAppTransReqParams.ts:20](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/interfaces/IAppTransReqParams.ts#L20)*

订单描述 移动支付上送

___
<a id="orderid"></a>

##  orderId

**● orderId**: *`string`*

*Defined in [interfaces/IAppTransReqParams.ts:5](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/interfaces/IAppTransReqParams.ts#L5)*

商户订单号，8-40位数字字母，不能含“-”或“_”，可以自行定制规则

___
<a id="paycardtype"></a>

## `<Optional>` payCardType

**● payCardType**: * `undefined` &#124; `string`
*

*Defined in [interfaces/IAppTransReqParams.ts:58](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/interfaces/IAppTransReqParams.ts#L58)*

支付卡类型 特殊商户交易控制用（如借贷分离）

___
<a id="paytimeout"></a>

## `<Optional>` payTimeout

**● payTimeout**: * `undefined` &#124; `string`
*

*Defined in [interfaces/IAppTransReqParams.ts:103](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/interfaces/IAppTransReqParams.ts#L103)*

支付超时时间 订单支付超时时间

___
<a id="reqreserved"></a>

## `<Optional>` reqReserved

**● reqReserved**: * `undefined` &#124; `string`
*

*Defined in [interfaces/IAppTransReqParams.ts:93](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/interfaces/IAppTransReqParams.ts#L93)*

请求方保留域 商户自定义保留域，交易应答时会原样返回

___
<a id="reserved"></a>

## `<Optional>` reserved

**● reserved**: * `undefined` &#124; `string`
*

*Defined in [interfaces/IAppTransReqParams.ts:63](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/interfaces/IAppTransReqParams.ts#L63)*

保留域

___
<a id="riskrateinfo"></a>

## `<Optional>` riskRateInfo

**● riskRateInfo**: * `undefined` &#124; `string`
*

*Defined in [interfaces/IAppTransReqParams.ts:78](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/interfaces/IAppTransReqParams.ts#L78)*

风控信息域

___
<a id="submerabbr"></a>

## `<Optional>` subMerAbbr

**● subMerAbbr**: * `undefined` &#124; `string`
*

*Defined in [interfaces/IAppTransReqParams.ts:30](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/interfaces/IAppTransReqParams.ts#L30)*

二级商户简称 商户类型为平台类商户接入时必须上送

___
<a id="submerid"></a>

## `<Optional>` subMerId

**● subMerId**: * `undefined` &#124; `string`
*

*Defined in [interfaces/IAppTransReqParams.ts:25](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/interfaces/IAppTransReqParams.ts#L25)*

二级商户代码 商户类型为平台类商户接入时必须上送

___
<a id="submername"></a>

## `<Optional>` subMerName

**● subMerName**: * `undefined` &#124; `string`
*

*Defined in [interfaces/IAppTransReqParams.ts:35](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/interfaces/IAppTransReqParams.ts#L35)*

二级商户名称 商户类型为平台类商户接入时必须上送

___
<a id="txnamt"></a>

##  txnAmt

**● txnAmt**: *`number`*

*Defined in [interfaces/IAppTransReqParams.ts:15](https://github.com/yc-node-typescript/unionpay/blob/343e74a/src/interfaces/IAppTransReqParams.ts#L15)*

交易金额 单位为分，不能带小数点

___

