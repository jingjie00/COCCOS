export type Method =
    'GET'
    | 'DELETE'
    | 'POST'
    | 'PUT';

export type SystemInfo = {
    name:string,
    version:string
};
export type BrowserInfo = {
    name:string,
    version:string
};

export namespace AGCPlatformInfoService {
    export const enum Naming {
        value = "AGCPlatformInfoService"
    }

    export interface PlatformInfo {
        getPlatform(): string;

        getPlatformVersion(): string;

        getPackageName(): string;

        getAppVersion(): string;

        getLanguage(): string;

        getScript(): string;

        getCountry(): string;

        getSystemInfo():SystemInfo;

        getBrowsersInfo():BrowserInfo;
    }
}

export namespace AGCNetworkService {
    export const enum Naming {
        value = "AGCNetworkService",
    }

    export interface AGCRequestConfig {
        timeout?: number;
        transformResponse?: ((data: any) => any)[];
        responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';
        onUploadProgress?: (progressEvent: any) => void;
        onDownloadProgress?: (progressEvent: any) => void;
        validateStatus?: ((status: number) => boolean);
        cancelToken?: CancelToken;
        throwOriginException?:boolean;
    }

    export interface AGCResponse<T = any> {
        data: T;
        status: number;
        statusText: string;
        headers: any;
    }

    export interface AGCError<T = any> extends Error {
        code?: string;
        response?: AGCResponse<T>;
    }

    export interface CancelTokenStatic {
        new(executor: (cancel: Canceler) => void): CancelToken;

        source(): CancelTokenSource;
    }

    export interface CancelToken {
        promise: Promise<Cancel>;
        reason?: Cancel;

        throwIfRequested(): void;
    }

    export interface Cancel {
        message: string;
    }

    export interface Canceler {
        (message?: string): void;
    }

    export interface CancelTokenSource {
        token: CancelToken;
        cancel: Canceler;
    }

    export interface AGCNetwork {
        post(url: string, param: any, headers?: any, config?: AGCRequestConfig): Promise<AGCResponse>;

        get(url: string, param?: any, headers?: any, config?: AGCRequestConfig): Promise<AGCResponse>;

        delete(url: string, param?: any, headers?: any, config?: AGCRequestConfig): Promise<AGCResponse>;

        put(url: string, param?: any, headers?: any, config?: AGCRequestConfig): Promise<AGCResponse>;

        CancelToken:CancelTokenStatic
    }
}

export namespace AGCFileTransloadService {
    export const enum Naming {
        value = "AGCFileTransloadService",
    }

    export interface AGCFile {
        uri: string;
        filename?: string;
        name?: string;
        type?: string;
    }

    export interface AGCUploadRequest {
        url: string;
        files: AGCFile[];
        header?: any;
        method?: string;
        data?: any;
        validateStatus?: ((status: number) => boolean);
    }

    export interface AGCUploadResponse<T = any> {
        data: T;
        status: number;
        statusText: string;
        headers: any;
    }

    export interface AGCUploadTaskRequest {
        url: string;
        method?: string;
        files: AGCFile[];
        data?: any;
        timeout?: number;
        validateStatus?: ((status: number) => boolean);
    }

    export interface AGCGameUploadTaskRequest {
        url: string;
        filePath: string;
        name: string;
        header?: any;
        formData?: any;
        validateStatus?: ((status: number) => boolean);
    }

    export interface AGCGameUploadTaskResponse {
        data: string;
        statusCode: number;
    }

    export interface AGCUploadTaskResponse<T = any> {
        data: T;
        status: number;
        headers: any;
    }

    export interface AGCDownloadRequest {
        url: string;
        header?: any;
        description?: string;
        filename?: string;
        validateStatus?: ((status: number) => boolean);
    }

    export interface AGCDownloadResponse<T = any> {
        status: number;
        token: string;
    }

    export interface AGCDownloadTaskRequest {
        url: string;
        header?: any;
        filename?: string;
        timeout?: number;
        validateStatus?: ((status: number) => boolean);
    }

    export interface AGCGameDownloadTaskRequest {
        url: string;
        header?: any;
        filePath?: string;
        validateStatus?: ((status: number) => boolean);
    }

    export interface AGCGameDownloadTaskResponse {
        data: string;
        status: any;
        filePath: any;
        header: any;
    }

    export interface AGCDownloadTaskResponse<T = any> {
        status: number;
        filePath: string;
        header: any;
    }

    export interface AGCDownloadCompleteRequest {
        token: string;
        validateStatus?: ((status: number) => boolean);
    }

    export interface AGCDownloadCompleteResponse<T = any> {
        status: number;
        uri: string;
    }

    export interface AGCRequestTaskRequest {
        url: string;
        data?: any;
        header?: any;
        method?: string;
        timeout?: number;
        responseType?: string;
        validateStatus?: ((status: number) => boolean);
    }

    export interface AGCRequestTaskResponse<T = any> {
        data: T;
        status: number;
        statusText: string;
        header: any;
    }

    export interface AGCFileTransload {
        upload(
            req: AGCFileTransloadService.AGCUploadRequest
        ): Promise<AGCFileTransloadService.AGCUploadResponse>;

        download(
            req: AGCFileTransloadService.AGCDownloadRequest
        ): Promise<AGCFileTransloadService.AGCDownloadResponse>;

        onDownloadComplete(
            req: AGCFileTransloadService.AGCDownloadCompleteRequest
        ): Promise<AGCFileTransloadService.AGCDownloadCompleteResponse>;

        downloadWithTask(
            req: AGCFileTransloadService.AGCDownloadTaskRequest
        ): Promise<AGCFileTransloadService.AGCDownloadTaskResponse>;

        downloadtaskOnProgressUpdate(progress: (progressEvent: any) => void): void;

        downloadtaskOnHeadersReceived(received: (progressEvent: any) => void): void;

        downloadtaskOffProgressUpdate(): void;

        downloadtaskOffHeadersReceived(): void;

        downloadtaskAbort(): void;

        uploadWithTask(
            req: AGCFileTransloadService.AGCUploadTaskRequest
        ): Promise<AGCFileTransloadService.AGCUploadTaskResponse>;

        uploadtaskOnProgressUpdate(progress: (progressEvent: any) => void): void;

        uploadtaskOnHeadersReceived(received: (progressEvent: any) => void): void;

        uploadtaskOffProgressUpdate(): void;

        uploadtaskOffHeadersReceived(): void;

        uploadtaskAbort(): void;

        request(
            req: AGCFileTransloadService.AGCRequestTaskRequest
        ): Promise<AGCFileTransloadService.AGCRequestTaskResponse>;

        requestOnProgressUpdate(progress: (progressEvent: any) => void): void;

        requestOnHeadersReceived(received: (progressEvent: any) => void): void;

        requestOffProgressUpdate(): void;

        requestOffHeadersReceived(): void;

        requestAbort(): void;
    }

    export interface AGCGameFileTransload {
        downloadWithTask(
            req: AGCFileTransloadService.AGCDownloadTaskRequest
        ): Promise<AGCFileTransloadService.AGCDownloadTaskResponse>;

        downloadtaskOnProgressUpdate(progress: (progressEvent: any) => void): void;

        downloadtaskAbort(): void;

        uploadWithTask(
            req: AGCFileTransloadService.AGCGameUploadTaskRequest
        ): Promise<AGCFileTransloadService.AGCGameUploadTaskResponse>;

        uploadtaskOnProgressUpdate(progress: (progressEvent: any) => void): void;

        uploadtaskOffProgressUpdate(): void;

        uploadtaskAbort(): void;
    }
}

export namespace AGCWebSocketService {
    export const enum Naming {
        value = "AGCWebSocketService",
    }

    export interface AGCWebSocket {
        connect(url: string, header: any, protocols?: [string]): Promise<void>;

        getReadyState(): number | null;

        send(data: any, successCallback?: () => void, failCallback?: () => void): void;

        close(code?: number, reason?: string, successCallback?: () => void, failCallback?: () => void): void;

        onOpen(callback: () => void): void;

        onMessage(callback: (data: any) => void): void;

        onClose(callback: (code: number, reason: String, wasClean?: boolean) => void): void;

        onError(callback: (data: any) => void): void;
    }
}
