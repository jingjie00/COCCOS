export declare class EnvironmentUtil {
    static instance: EnvironmentUtil;
    static getEnvironmentIns(): EnvironmentUtil;
    isBrowser(): boolean;
    isNodeJS(): boolean;
    isReactNative(): boolean;
    isQuickApp(): boolean;
}
