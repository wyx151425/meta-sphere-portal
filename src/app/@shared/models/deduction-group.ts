import {MetaSphereEntity} from "./meta-sphere-entity";

export class DeductionGroup extends MetaSphereEntity {
  /**
   * 推演群组编号
   */
  code?: string;
  /**
   * 推演主题
   */
  theme?: string;
  /**
   * 推演群组类型
   */
  type?: number;
  /**
   * 干预等级
   */
  intervenedLevel?: number
}
