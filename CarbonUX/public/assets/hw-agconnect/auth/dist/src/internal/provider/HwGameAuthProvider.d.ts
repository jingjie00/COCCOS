import { AGConnectAuthCredential, HwGameAuthReq } from "@hw-agconnect/auth-types";
export declare class HwGameAuthProviderImpl {
    static credentialWithPlayerSign(hwGameAuthReq: HwGameAuthReq, autoCreateUser?: boolean): AGConnectAuthCredential;
}
