

# Hierarchy

**IRefundParams**

# Properties

<a id="accno"></a>

## `<Optional>` accNo

**● accNo**: * `undefined` &#124; `string`
*

*Defined in interfaces/IRefundParams.ts:59*

账号 1、 后台类消费交易时上送全卡号或卡号后4位 2、 跨行收单且收单机构收集银行卡信息时上送 3、前台类交易可通过配置后返回，卡号可选上送

___
<a id="accsplitdata"></a>

## `<Optional>` accSplitData

**● accSplitData**: * `undefined` &#124; `string`
*

*Defined in interfaces/IRefundParams.ts:79*

分账域

___
<a id="accesstype"></a>

##  accessType

**● accessType**: * `string` &#124; `number`
*

*Defined in interfaces/IRefundParams.ts:11*

接入类型 0：普通商户直连接入 2：平台类商户接入

___
<a id="ctrlrule"></a>

## `<Optional>` ctrlRule

**● ctrlRule**: * `undefined` &#124; `string`
*

*Defined in interfaces/IRefundParams.ts:89*

控制规则 32位01字符串控制位，从左至右第四位取值为1时表示需要强制分期处理

___
<a id="customerinfo"></a>

## `<Optional>` customerInfo

**● customerInfo**: * `undefined` &#124; `string`
*

*Defined in interfaces/IRefundParams.ts:104*

银行卡验证信息及身份信息

___
<a id="defaultpaytype"></a>

## `<Optional>` defaultPayType

**● defaultPayType**: * `undefined` &#124; `string`
*

*Defined in interfaces/IRefundParams.ts:94*

默认支付方式 取值参考数据元说明

___
<a id="fronturl"></a>

## `<Optional>` frontUrl

**● frontUrl**: * `undefined` &#124; `string`
*

*Defined in interfaces/IRefundParams.ts:51*

前台通知地址 前台返回商户结果时使用，前台类交易需上送

___
<a id="instaltransinfo"></a>

## `<Optional>` instalTransInfo

**● instalTransInfo**: * `undefined` &#124; `string`
*

*Defined in interfaces/IRefundParams.ts:46*

分期付款信息域

___
<a id="issinsno"></a>

## `<Optional>` issInsNo

**● issInsNo**: * `undefined` &#124; `string`
*

*Defined in interfaces/IRefundParams.ts:74*

发卡机构代码

___
<a id="orderdesc"></a>

## `<Optional>` orderDesc

**● orderDesc**: * `undefined` &#124; `string`
*

*Defined in interfaces/IRefundParams.ts:26*

订单描述 移动支付上送

___
<a id="orderid"></a>

##  orderId

**● orderId**: *`string`*

*Defined in interfaces/IRefundParams.ts:6*

商户订单号，8-40位数字字母，不能含“-”或“_”，可以自行定制规则。 注意不是原订单号的ID，要自己生成。

___
<a id="origqryid"></a>

##  origQryId

**● origQryId**: *`string`*

*Defined in interfaces/IRefundParams.ts:16*

原交易查询流水号 后续类交易（如退货、消费撤销等）送原交易的queryId

___
<a id="paycardtype"></a>

## `<Optional>` payCardType

**● payCardType**: * `undefined` &#124; `string`
*

*Defined in interfaces/IRefundParams.ts:64*

支付卡类型 特殊商户交易控制用（如借贷分离）

___
<a id="paytimeout"></a>

## `<Optional>` payTimeout

**● payTimeout**: * `undefined` &#124; `string`
*

*Defined in interfaces/IRefundParams.ts:109*

支付超时时间 订单支付超时时间

___
<a id="reqreserved"></a>

## `<Optional>` reqReserved

**● reqReserved**: * `undefined` &#124; `string`
*

*Defined in interfaces/IRefundParams.ts:99*

请求方保留域 商户自定义保留域，交易应答时会原样返回

___
<a id="reserved"></a>

## `<Optional>` reserved

**● reserved**: * `undefined` &#124; `string`
*

*Defined in interfaces/IRefundParams.ts:69*

保留域

___
<a id="riskrateinfo"></a>

## `<Optional>` riskRateInfo

**● riskRateInfo**: * `undefined` &#124; `string`
*

*Defined in interfaces/IRefundParams.ts:84*

风控信息域

___
<a id="submerabbr"></a>

## `<Optional>` subMerAbbr

**● subMerAbbr**: * `undefined` &#124; `string`
*

*Defined in interfaces/IRefundParams.ts:36*

二级商户简称 商户类型为平台类商户接入时必须上送

___
<a id="submerid"></a>

## `<Optional>` subMerId

**● subMerId**: * `undefined` &#124; `string`
*

*Defined in interfaces/IRefundParams.ts:31*

二级商户代码 商户类型为平台类商户接入时必须上送

___
<a id="submername"></a>

## `<Optional>` subMerName

**● subMerName**: * `undefined` &#124; `string`
*

*Defined in interfaces/IRefundParams.ts:41*

二级商户名称 商户类型为平台类商户接入时必须上送

___
<a id="txnamt"></a>

##  txnAmt

**● txnAmt**: *`number`*

*Defined in interfaces/IRefundParams.ts:21*

交易金额 单位为分，不能带小数点

___

