import { OnTokenListener, TokenState } from "@hw-agconnect/auth-types";
export declare class ListenerManager {
    /**
     * 监听回调事件
     * @param tokenSnapshot 当前token信息
     */
    private static instanceMap;
    private lastNotifiedToken;
    private tokenListeners;
    private ListenerManager;
    static getInstance(name: string): ListenerManager | undefined;
    removeTokenListener(listener: OnTokenListener): void;
    addTokenListener(listener: OnTokenListener): void;
    postNotification(state: TokenState, token: string): void;
}
