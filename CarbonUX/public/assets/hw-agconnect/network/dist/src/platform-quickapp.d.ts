import { PlatformApi } from "./platformApi";
export declare class QuickAppPlatformImpl extends PlatformApi {
    getPlatform(): string;
    getPlatformVersion(): string;
    getPackageName(): string;
    getAppVersion(): string;
    getLanguage(): string;
    getCountry(): string;
}
