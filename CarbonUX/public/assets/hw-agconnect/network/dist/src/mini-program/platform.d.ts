import { PlatformApi } from "../platformApi";
export declare class MiniProgramPlatformImpl extends PlatformApi {
    private logger;
    getPlatform(): string;
    getPlatformVersion(): string;
    getAppVersion(): string;
    getLanguage(): string;
}
