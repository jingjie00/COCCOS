import { WebsocketApi } from "./websocketApi";
export declare class BrowserWebSocketImpl extends WebsocketApi {
    private WebSocketImpl;
    constructor();
    connect(url: string, header: any, protocols?: string[]): Promise<void>;
}
