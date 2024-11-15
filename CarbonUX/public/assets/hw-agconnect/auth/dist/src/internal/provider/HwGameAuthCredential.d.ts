import { OAuth2Credential } from "./OAuth2Credential";
import { SignInRequest } from "../server/request/SignInRequest";
import { UserLinkRequest } from "../server/request/UserLinkRequest";
import { ReauthenticateRequest } from "../server/request/ReauthenticateRequest";
export declare class HwGameAuthCredential extends OAuth2Credential {
    private playerSign;
    private extraData;
    constructor(playerSign: string, extraData: string, autoCreateUser: boolean);
    getProvider(): number;
    prepareUserAuthRequest(request: SignInRequest): void;
    prepareUserReauthRequest(request: ReauthenticateRequest): void;
    prepareUserLinkRequest(request: UserLinkRequest): void;
}
