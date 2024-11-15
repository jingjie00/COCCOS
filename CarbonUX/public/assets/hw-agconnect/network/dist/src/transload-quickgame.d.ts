import { AGCFileTransloadService } from "@hw-agconnect/network-types";
export declare class QuickGameTransloadImpl implements AGCFileTransloadService.AGCGameFileTransload {
    private uploadTaskIns;
    private downloadTaskIns;
    downloadWithTask(req: AGCFileTransloadService.AGCGameDownloadTaskRequest): Promise<AGCFileTransloadService.AGCGameDownloadTaskResponse>;
    downloadtaskOnProgressUpdate(progress: (progressEvent: any) => void): void;
    downloadtaskAbort(): void;
    uploadWithTask(req: AGCFileTransloadService.AGCGameUploadTaskRequest): Promise<AGCFileTransloadService.AGCGameUploadTaskResponse>;
    uploadtaskOnProgressUpdate(progress: (progressEvent: any) => void): void;
    uploadtaskOffProgressUpdate(): void;
    uploadtaskAbort(): void;
}
