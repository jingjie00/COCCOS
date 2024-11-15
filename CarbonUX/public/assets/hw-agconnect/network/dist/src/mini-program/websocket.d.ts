import { WebsocketApi } from "../websocketApi";
export declare class MiniProgramWebsocketImpl extends WebsocketApi {
    connect(url: string, header: any, protocols?: string[]): Promise<void>;
    send(data: any, successCallback?: () => void, failCallback?: () => void): void;
    close(code?: number, reason?: string, successCallback?: () => void, failCallback?: () => void): void;
    onOpen(callback: (data: any) => any): void;
    onMessage(callback: (data: any) => void): void;
    onClose(callback: (code: number, reason: String, wasClean?: boolean) => void): void;
    onError(callback: (data: any) => void): void;
}
