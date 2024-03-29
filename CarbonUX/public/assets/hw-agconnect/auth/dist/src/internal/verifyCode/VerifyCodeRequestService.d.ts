import { VerifyCodeSettings } from './VerifyCodeSettings';
import { AGCInstance } from "@hw-agconnect/instance-types";
import { VerifyCodeResult } from "@hw-agconnect/auth-types";
export declare class VerifyCodeRequestService {
    private instance;
    private authBackend;
    constructor(instance?: AGCInstance);
    requestEmailVerifyCode(email: string, settings: VerifyCodeSettings): Promise<VerifyCodeResult>;
    requestPhoneVerifyCode(countryCode: string, phoneNumber: string, settings: VerifyCodeSettings): Promise<VerifyCodeResult>;
    private requestVerifyCode;
    private buildRequest;
}
