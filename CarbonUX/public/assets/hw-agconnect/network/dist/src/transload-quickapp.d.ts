import { AGCFileTransloadService } from "@hw-agconnect/network-types";
export declare class QuickAppTransloadImpl implements AGCFileTransloadService.AGCFileTransload {
    private quickAppReq;
    private uploadTaskIns;
    private downloadTaskIns;
    private reqTask;
    upload(req: AGCFileTransloadService.AGCUploadRequest): Promise<AGCFileTransloadService.AGCUploadResponse>;
    download(req: AGCFileTransloadService.AGCDownloadRequest): Promise<AGCFileTransloadService.AGCDownloadResponse>;
    onDownloadComplete(req: AGCFileTransloadService.AGCDownloadCompleteRequest): Promise<AGCFileTransloadService.AGCDownloadCompleteResponse>;
    downloadWithTask(req: AGCFileTransloadService.AGCDownloadTaskRequest): Promise<AGCFileTransloadService.AGCDownloadTaskResponse>;
    downloadtaskOnProgressUpdate(progress: (progressEvent: any) => void): void;
    downloadtaskOnHeadersReceived(received: (progressEvent: any) => void): void;
    downloadtaskOffProgressUpdate(): void;
    downloadtaskOffHeadersReceived(): void;
    downloadtaskAbort(): void;
    uploadWithTask(req: AGCFileTransloadService.AGCUploadTaskRequest): Promise<AGCFileTransloadService.AGCUploadTaskResponse>;
    uploadtaskOnProgressUpdate(progress: (progressEvent: any) => void): void;
    uploadtaskOnHeadersReceived(received: (progressEvent: any) => void): void;
    uploadtaskOffProgressUpdate(): void;
    uploadtaskOffHeadersReceived(): void;
    uploadtaskAbort(): void;
    request(req: AGCFileTransloadService.AGCRequestTaskRequest): Promise<AGCFileTransloadService.AGCRequestTaskResponse>;
    requestOnProgressUpdate(progress: (progressEvent: any) => void): void;
    requestOnHeadersReceived(received: (progressEvent: any) => void): void;
    requestOffProgressUpdate(): void;
    requestOffHeadersReceived(): void;
    requestAbort(): void;
}
