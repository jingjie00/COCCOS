import { AGCStorageService } from "@hw-agconnect/storage-types";
import AGCStorage = AGCStorageService.AGCStorage;
export declare class QuickAppStorage implements AGCStorage {
    private static quickAppStoreMap;
    private agcCryptImpl;
    static getInstance(name: string, cryptImpl?: any): QuickAppStorage;
    get(key: string): Promise<string | null>;
    remove(key: string): Promise<void>;
    set(key: string, value: any): Promise<void>;
}
