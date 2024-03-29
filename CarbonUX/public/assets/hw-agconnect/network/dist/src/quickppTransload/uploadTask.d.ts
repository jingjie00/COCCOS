import { AGCFileTransloadService } from "@hw-agconnect/network-types";
export declare class uploadTask {
    private logger;
    private task;
    uploadWithTask(req: AGCFileTransloadService.AGCUploadTaskRequest): Promise<AGCFileTransloadService.AGCUploadTaskResponse>;
    onProgressUpdate(progress: (progressEvent: any) => void): void;
    offProgressUpdate(): void;
    onHeadersReceived(received: (progressEvent: any) => void): void;
    offHeadersReceived(): void;
    abort(): void;
}
