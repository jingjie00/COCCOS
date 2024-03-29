import { AGConnectAuthCredential, AGConnectAuthCredentialProvider, AGConnectUser, AGConnectUserExtra, SignInResult, ProfileReqType, TokenResult } from '@hw-agconnect/auth-types';
import { AGCInstance } from "@hw-agconnect/instance-types";
import { StoredUserInfo } from "../storage/StoredUserInfo";
export declare class AGConnectDefaultUser implements AGConnectUser {
    private instance;
    private authBackend;
    private storedUserManager;
    private user;
    constructor(instance?: AGCInstance);
    getUser(): StoredUserInfo;
    isAnonymous(): boolean;
    getUid(): string;
    getEmail(): string;
    getPhone(): string;
    getDisplayName(): string;
    getPhotoUrl(): string;
    getProviderId(): string;
    getProviderInfo(): Array<Map<string, string>>;
    getUserExtra(): Promise<AGConnectUserExtra | null>;
    getAccessToken(): string;
    getRefreshToken(): string;
    buildUser(response: any): void;
    getToken(forceRefresh: boolean): Promise<TokenResult>;
    getEmailVerified(): number;
    getPasswordSetted(): number;
    link(credential: AGConnectAuthCredential): Promise<SignInResult>;
    unlink(credentialProvider: AGConnectAuthCredentialProvider): Promise<SignInResult>;
    private userInfoToMap;
    private updateAnonymousUserInfo;
    private sendUnlinkRequest;
    userReauthenticate(credential: AGConnectAuthCredential): Promise<SignInResult>;
    private getUserReauthWithCredential;
    /**
     * 更新当前用户的个人信息
     *
     * @param userProfile 个人信息
     * @return 更新结果异步任务
     */
    updateProfile(userProfile: ProfileReqType): Promise<void>;
    /**
     * 更新当前用户邮箱
     *
     * @param newEmail 新邮箱地址
     * @param newVerifyCode 验证码
     * @param lang 语言，格式为zh_CN，参考设计文档标准
     * @return 更新结果异步任务
     */
    updateEmail(newEmail: string, newVerifyCode: string, lang: string): Promise<void>;
    /**
     * 更新当前用户手机
     *
     * @param countryCode 国家码
     * @param newPhone 新手机号
     * @param newVerifyCode 验证码
     * @param lang 语言，格式为zh_CN，参考设计文档标准
     * @return 更新结果异步任务
     */
    updatePhone(countryCode: string, newPhone: string, newVerifyCode: string, lang: string): Promise<void>;
    /**
     * 更新当前用户密码
     *
     * @param newPassword 新密码
     * @param verifyCode 验证码
     * @param provider 手机或邮箱标识,手机为11,邮箱为12
     * @return 更新结果异步任务
     */
    updatePassword(newPassword: string, verifyCode: string, provider: number): Promise<void>;
}
