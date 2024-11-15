import { AGConnectUser, SignInResult } from '@hw-agconnect/auth-types';
export declare class SignInResultImpl implements SignInResult {
    private user;
    constructor(user: AGConnectUser);
    /**
     * 返回当前登录的用户信息
     * @return 当前登录的用户信息
     */
    getUser(): AGConnectUser;
}
