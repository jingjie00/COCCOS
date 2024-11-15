import { CredentialsService, Token } from "@hw-agconnect/baseservice-types";
import { Logger } from "@hw-agconnect/log";
import { AGCInstance } from "@hw-agconnect/instance-types";
import "@hw-agconnect/storage";
import "@hw-agconnect/network";
declare let credentialsLogger: Logger;
declare class CredentialsProviderImpl implements CredentialsService.CredentialsProvider {
    private instance;
    constructor(instance?: AGCInstance);
    removeToken(): Promise<void>;
    getToken(forceRefresh?: boolean): Promise<Token>;
    private getCredentialStoreKey;
    /**
     * 请求clientToken
     */
    private requestToken;
}
export { credentialsLogger, CredentialsProviderImpl };
