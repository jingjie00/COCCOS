export declare type AGConnectServicesConfig = {
    agcgw: any;
    agcgw_all?: any;
    client: any;
    service: any;
    oauth_client?: any;
    app_info?: any;
    region?: string;
    configuration_version?: string;
    [string: string]: any;
};

export const enum AGCRoutePolicy {
    UNKNOWN,
    CHINA,
    GERMANY,
    RUSSIA,
    SINGAPORE
}

export declare type  AGConnectOptions =  {
    routePolicy:AGCRoutePolicy;
};

export declare interface AGCInstance {
    setOption(option:AGConnectOptions):void;
    name():string;
    configInstance(config: AGConnectServicesConfig):AGCInstance;
    config():AGConnectServicesConfig; // depended by Cloud-Storage/HA
    setApiKey(apiKey: string): void;
    setClientSecret(clientSecret: string): void;
    setClientId(clientId: string): void;
    setCustomCredentialsProvider(customCredentialsProvider:any):boolean;
    setCustomAuthProvider(customAuthProvider:any):boolean;
    getService<T>(name: string): T | null; // depended by Cloud-Storage/HA
    setCryptImp(cryptImpl: Crypt): boolean;
    setAppVersion(version:string):void;
}
export interface Crypt {
    decrypt: (inputValue: string) => {};
    encrypt: (inputValue: string) => {};
}