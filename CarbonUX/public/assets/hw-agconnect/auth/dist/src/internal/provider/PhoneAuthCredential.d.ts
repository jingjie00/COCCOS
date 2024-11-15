import { AccountCredential } from './AccountCredential';
import { SignInRequest } from '../server/request/SignInRequest';
import { UserLinkRequest } from '../server/request/UserLinkRequest';
import { ReauthenticateRequest } from "../server/request/ReauthenticateRequest";
export declare class PhoneAuthCredential extends AccountCredential {
    countryCode: string;
    phoneNumber: string;
    constructor(countryCode: string, phoneNumber: string, password: string, verifyCode: string);
    getProvider(): number;
    prepareUserAuthRequest(request: SignInRequest): void;
    prepareUserLinkRequest(request: UserLinkRequest): void;
    private generateExtraData;
    getPhone(): string;
    prepareUserReauthRequest(request: ReauthenticateRequest): void;
}
