import {MetaSphereEntity} from "./meta-sphere-entity";

export class User extends MetaSphereEntity {
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 密码
   */
  password?: string;
  /**
   * 姓名
   */
  name?: string;
  /**
   * 手机号
   */
  mobilePhoneNumber?: string;
}
