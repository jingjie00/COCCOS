import { AGCWebSocketService } from "@hw-agconnect/network-types";
import { Logger } from '@hw-agconnect/log';
export declare abstract class WebsocketApi implements AGCWebSocketService.AGCWebSocket {
    protected logger: Logger;
    protected websocket?: any;
    abstract connect(url: string, header: any, protocols?: string[]): Promise<void>;
    getReadyState(): number | null;
    send(data: any, successCallback?: () => void, failCallback?: () => void): void;
    close(code?: number, reason?: string, successCallback?: () => void, failCallback?: () => void): void;
    onOpen(callback: () => void): void;
    onMessage(callback: (data: any) => void): void;
    onClose(callback: (code: number, reason: String, wasClean?: boolean) => void): void;
    onError(callback: (data: any) => void): void;
}
