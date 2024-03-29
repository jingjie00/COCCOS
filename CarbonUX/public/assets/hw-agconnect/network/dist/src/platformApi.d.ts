import { AGCPlatformInfoService, BrowserInfo, SystemInfo } from "@hw-agconnect/network-types";
export declare class PlatformApi implements AGCPlatformInfoService.PlatformInfo {
    getPlatform(): string;
    getPlatformVersion(): string;
    getPackageName(): string;
    getAppVersion(): string;
    getLanguage(): string;
    getScript(): string;
    getCountry(): string;
    getSystemInfo(): SystemInfo;
    getBrowsersInfo(): BrowserInfo;
}
