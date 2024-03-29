import { PhoneUser } from '@hw-agconnect/auth-types';
export declare class PhoneUserImpl implements PhoneUser {
    countryCode: string;
    phoneNumber: string;
    password: string;
    verifyCode: string;
    constructor(countryCode: string, phoneNumber: string, password: string, verifyCode: string);
    getPhone(): string;
    /**
     * 校验手机用户是否有效
     *
     * @param needVerifyPassword 是否校验用户的密码
     * @return 校验后的返回码
     */
    verifyPhoneUser(needVerifyPassword: boolean): void;
}
