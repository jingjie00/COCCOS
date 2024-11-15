import { AGCInstance } from "@hw-agconnect/instance-types";
export declare class BaseRequest {
    private sdkServiceName;
    private sdkVersion;
    private sdkPlatform;
    private sdkPlatformVersion;
    private sdkType;
    private packageName;
    private appVersion;
    private headerProductId;
    private headerAppId;
    private headerAaId;
    private headerClientId;
    private authorization;
    private accessToken;
    private agcgwUrl;
    private agcgwBackUrl;
    private agcConfig;
    private instance;
    constructor();
    setAGCInstance(instance: AGCInstance): void;
    getHeaderProductId(): string;
    setAccessToken(value: string): void;
    getAgcgwUrl(): string;
    getAuthHeader(): any;
    private initConfig;
}
