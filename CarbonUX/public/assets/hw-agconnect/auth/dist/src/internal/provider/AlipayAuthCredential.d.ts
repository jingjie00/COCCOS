import { OAuth2Credential } from './OAuth2Credential';
import { SignInRequest } from '../server/request/SignInRequest';
import { UserLinkRequest } from '../server/request/UserLinkRequest';
import { ReauthenticateRequest } from "../server/request/ReauthenticateRequest";
export declare class AlipayAuthCredential extends OAuth2Credential {
    static readonly TOKEN: string;
    authCode: string;
    constructor(authCode: string, autoCreateUser?: boolean);
    getProvider(): number;
    prepareUserAuthRequest(request: SignInRequest): void;
    prepareUserLinkRequest(request: UserLinkRequest): void;
    prepareUserReauthRequest(request: ReauthenticateRequest): void;
    private generateExtraData;
}
