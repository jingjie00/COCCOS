import { WebsocketApi } from "./websocketApi";
export declare class QuickGameWebSocketImpl extends WebsocketApi {
    connect(url: string, header: any, protocols?: string[]): Promise<void>;
}
