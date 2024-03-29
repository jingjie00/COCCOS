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
    private headerClientId;
    private clientSecret;
    private agcgwUrl;
    private agcgwBackUrl;
    private agcConfig;
    private instance;
    constructor(instance: AGCInstance);
    setAGCInstance(instance: AGCInstance): void;
    getHeaderClientId(): string;
    getClientSecret(): string;
    getAgcgwUrl(): string;
    getHeader(): any;
    private initConfig;
}
