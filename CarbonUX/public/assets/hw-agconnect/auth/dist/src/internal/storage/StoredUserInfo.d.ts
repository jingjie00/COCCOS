import { ProviderInfoService } from "../user/ProviderInfoService";
import { SecureTokenService } from "../user/SecureTokenService";
export declare class StoredUserInfo {
    anonymous: boolean;
    uid: string;
    displayName: string;
    photoUrl: string;
    email: string;
    phone: string;
    providerId: string;
    emailVerified: number;
    passwordSetted: number;
    providerService: ProviderInfoService;
    tokenService: SecureTokenService;
    constructor(instanceName: string);
    constructUser(info: any): void;
}
