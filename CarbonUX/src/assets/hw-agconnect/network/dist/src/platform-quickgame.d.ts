import { PlatformApi } from "./platformApi";
export declare class QuickGamePlatformImpl extends PlatformApi {
    getPlatform(): string;
    getPlatformVersion(): string;
    getLanguage(): string;
}
