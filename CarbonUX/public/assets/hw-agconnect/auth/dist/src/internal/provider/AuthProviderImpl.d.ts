import { AuthProviderService, TokenResult } from "@hw-agconnect/auth-types";
import { AGCInstance } from "@hw-agconnect/instance-types";
export declare class AuthProviderImpl implements AuthProviderService.AuthProvider {
    private instance;
    private storedUserManager;
    constructor(instance: AGCInstance);
    getToken(forceRefresh: boolean): Promise<TokenResult | null>;
}
