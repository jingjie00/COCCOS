import { AGCStorageService } from "@hw-agconnect/storage-types";
import AGCStorage = AGCStorageService.AGCStorage;
export declare class SessionImpl implements AGCStorage {
    private static sessionMap;
    private agcCryptImpl;
    static getInstance(name: string, cryptImpl?: any): SessionImpl;
    private static isSessionStorageAvailable;
    get(key: string): Promise<any>;
    set(key: string, value: any): Promise<void>;
    remove(key: string): Promise<void>;
}
