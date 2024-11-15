import { AGCFileTransloadService } from "@hw-agconnect/network-types";
export declare class quickAppRequest {
    private logger;
    upload(req: AGCFileTransloadService.AGCUploadRequest): Promise<AGCFileTransloadService.AGCUploadResponse>;
    download(req: AGCFileTransloadService.AGCDownloadRequest): Promise<AGCFileTransloadService.AGCDownloadResponse>;
    onDownloadComplete(req: AGCFileTransloadService.AGCDownloadCompleteRequest): Promise<AGCFileTransloadService.AGCDownloadCompleteResponse>;
}
