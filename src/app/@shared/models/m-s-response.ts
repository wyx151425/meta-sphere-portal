export interface MSResponse<T> {
  /**
   * 状态码
   */
  statusCode: number;
  /**
   * 数据
   */
  data: T;
}
