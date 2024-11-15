import { AGConnectAuthCredential } from '@hw-agconnect/auth-types';
import { SignInRequest } from '../server/request/SignInRequest';
import { UserLinkRequest } from '../server/request/UserLinkRequest';
import { ReauthenticateRequest } from "../server/request/ReauthenticateRequest";
export declare abstract class OAuth2Credential implements AGConnectAuthCredential {
    autoCreateUser: boolean | undefined;
    getProvider(): number;
    /**
     * 此接口由内部使用
     *
     * @param request 登录请求
     */
    abstract prepareUserAuthRequest(request: SignInRequest): void;
    /**
     * 此接口由内部使用
     *
     * @param request 重认证请求
     */
    abstract prepareUserReauthRequest(request: ReauthenticateRequest): void;
    /**
     * 此接口由内部使用
     *
     * @param request 用户关联请求
     */
    abstract prepareUserLinkRequest(request: UserLinkRequest): void;
}
