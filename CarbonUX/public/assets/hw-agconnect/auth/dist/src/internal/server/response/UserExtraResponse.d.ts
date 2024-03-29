import { BaseResponse } from "@hw-agconnect/instance";
import { AGConnectUserExtra } from "@hw-agconnect/auth-types";
export declare class UserExtraResponse extends BaseResponse {
    displayName: string;
    photoUrl: string;
    emailVerified: number;
    passwordSetted: number;
    email: string;
    phone: string;
    userExtra: UserExtra | null;
    /**
     * 构造方法，给定一些默认值，需要改变时，通过set方法设置
     */
    constructor();
    constructResponse(response: any): void;
}
export declare class UserExtra implements AGConnectUserExtra {
    createTime: string;
    lastSignInTime: string;
    getCreateTime(): String;
    getLastSignInTime(): String;
}
