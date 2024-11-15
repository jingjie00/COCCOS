import { AGCFileTransloadService } from "@hw-agconnect/network-types";
export declare class quickgameDownloadTask {
    private logger;
    private task;
    downloadWithTask(req: AGCFileTransloadService.AGCGameDownloadTaskRequest): Promise<AGCFileTransloadService.AGCGameDownloadTaskResponse>;
    onProgressUpdate(progress: (progressEvent: any) => void): void;
    abort(): void;
}
