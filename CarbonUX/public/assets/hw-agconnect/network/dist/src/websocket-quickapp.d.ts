import { WebsocketApi } from "./websocketApi";
export declare class QuickAppWebSocketImpl extends WebsocketApi {
    connect(url: string, header: any, protocols?: string[]): Promise<void>;
    getReadyState(): number | null;
    send(data: any, successCallback?: () => void, failCallback?: () => void): void;
    close(code?: number, reason?: string, successCallback?: () => void, failCallback?: () => void): void;
    onError(callback: (data: any) => void): void;
}
