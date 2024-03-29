import { VerifyCodeResult } from "@hw-agconnect/auth-types";
export declare class VerifyCodeResultImpl implements VerifyCodeResult {
    private shortestInterval;
    private validityPeriod;
    constructor(shortestInterval: string, validityPeriod: string);
    /**
     * 两次发送验证码的最小时间间隔
     *
     * @return 最小时间间隔，单位：秒
     */
    getShortestInterval(): string;
    /**
     * 验证码有效期
     *
     * @return 有效期，单位：秒
     */
    getValidityPeriod(): string;
}
