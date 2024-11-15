import { AccountCredential } from "./AccountCredential";
import { SignInRequest } from "../server/request/SignInRequest";
import { UserLinkRequest } from "../server/request/UserLinkRequest";
import { ReauthenticateRequest } from "../server/request/ReauthenticateRequest";
export declare class EmailAuthCredential extends AccountCredential {
    email: string;
    constructor(email: string, password: string, verifyCode: string);
    getProvider(): number;
    prepareUserAuthRequest(request: SignInRequest): void;
    prepareUserLinkRequest(request: UserLinkRequest): void;
    private generateExtraData;
    prepareUserReauthRequest(request: ReauthenticateRequest): void;
}
