import { AGCFileTransloadService } from "@hw-agconnect/network-types";
export declare class requestTask {
    private logger;
    private task;
    request(req: AGCFileTransloadService.AGCRequestTaskRequest): Promise<AGCFileTransloadService.AGCRequestTaskResponse>;
    onProgressUpdate(progress: (progressEvent: any) => void): void;
    offProgressUpdate(): void;
    onHeadersReceived(received: (progressEvent: any) => void): void;
    offHeadersReceived(): void;
    abort(): void;
}
