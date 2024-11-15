import { BrowserInfo, SystemInfo } from "@hw-agconnect/network-types";
import "@hw-agconnect/instance";
import { AGCInstance } from "@hw-agconnect/instance-types";
import { PlatformApi } from "./platformApi";
export declare class BrowserPlatformImpl extends PlatformApi {
    private logger;
    private instance;
    constructor(instance: AGCInstance);
    getPlatform(): string;
    getAppVersion(): string;
    getLanguage(): string;
    getSystemInfo(): SystemInfo;
    getBrowsersInfo(): BrowserInfo;
}
