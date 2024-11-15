import { AGCFileTransloadService } from "@hw-agconnect/network-types";
export declare class downloadTask {
    private logger;
    private task;
    downloadWithTask(req: AGCFileTransloadService.AGCDownloadTaskRequest): Promise<AGCFileTransloadService.AGCDownloadTaskResponse>;
    onProgressUpdate(progress: (progressEvent: any) => void): void;
    offProgressUpdate(): void;
    onHeadersReceived(received: (progressEvent: any) => void): void;
    offHeadersReceived(): void;
    abort(): void;
}
