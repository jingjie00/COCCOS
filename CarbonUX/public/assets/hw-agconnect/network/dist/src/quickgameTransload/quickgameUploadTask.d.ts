import { AGCFileTransloadService } from "@hw-agconnect/network-types";
export declare class quickgameUploadTask {
    private logger;
    private task;
    uploadWithTask(req: AGCFileTransloadService.AGCGameUploadTaskRequest): Promise<AGCFileTransloadService.AGCGameUploadTaskResponse>;
    onProgressUpdate(progress: (progressEvent: any) => void): void;
    offProgressUpdate(): void;
    abort(): void;
}
