import { AGCStorageService } from "@hw-agconnect/storage-types";
import AGCStorage = AGCStorageService.AGCStorage;
export declare class QuickGameStorage implements AGCStorage {
    private static quickGameStoreMap;
    private agcCryptImpl;
    static getInstance(name: string, cryptImpl?: any): QuickGameStorage;
    get(key: string): Promise<any>;
    set(key: string, value: any): Promise<void>;
    remove(key: string): Promise<void>;
}
