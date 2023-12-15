export class MetaSphereEntity {
  /**
   * 逻辑主键
   */
  id?: number;
  /**
   * 分布式主键
   */
  objectId?: string;
  /**
   * 数据状态（1-可用/0-已删除）
   */
  status?: number;
  /**
   * 数据入库时间
   */
  createAt?: string;
  /**
   * 数据最后一次修改时间
   */
  updateAt?: string;

  constructor() {
  }
}
