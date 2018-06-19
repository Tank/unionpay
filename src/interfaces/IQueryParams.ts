export interface IQueryParams {
  /**
   * 商户订单号，8-40位数字字母，不能含“-”或“_”，可以自行定制规则
   */
  orderId: string;

  /**
   * 接入类型 0：普通商户直连接入 2：平台类商户接入
   */
  accessType: string | number;

  /**
   * 订单描述 移动支付上送
   */
  orderDesc?: string;

  /**
   * 二级商户代码 商户类型为平台类商户接入时必须上送
   */
  subMerId?: string;

  /**
   * 二级商户简称 商户类型为平台类商户接入时必须上送
   */
  subMerAbbr?: string;

  /**
   * 二级商户名称 商户类型为平台类商户接入时必须上送
   */
  subMerName?: string;

  /**
   * 分期付款信息域
   */
  instalTransInfo?: string;

  /**
   * 前台通知地址 前台返回商户结果时使用，前台类交易需上送
   */
  frontUrl?: string;

  /**
   * 账号
   * 1、 后台类消费交易时上送全卡号或卡号后4位
   * 2、 跨行收单且收单机构收集银行卡信息时上送
   * 3、前台类交易可通过配置后返回，卡号可选上送
   */
  accNo?: string;

  /**
   * 支付卡类型 特殊商户交易控制用（如借贷分离）
   */
  payCardType?: string;

  /**
   * 保留域
   */
  reserved?: string;

  /**
   * 发卡机构代码
   */
  issInsNo?: string;

  /**
   * 分账域
   */
  accSplitData?: string;

  /**
   * 风控信息域
   */
  riskRateInfo?: string;

  /**
   * 控制规则 32位01字符串控制位，从左至右第四位取值为1时表示需要强制分期处理
   */
  ctrlRule?: string;

  /**
   * 默认支付方式 取值参考数据元说明
   */
  defaultPayType?: string;

  /**
   * 请求方保留域 商户自定义保留域，交易应答时会原样返回
   */
  reqReserved?: string;

  /**
   * 银行卡验证信息及身份信息
   */
  customerInfo?: string;

  /**
   * 支付超时时间 订单支付超时时间
   */
  payTimeout?: string;
}
