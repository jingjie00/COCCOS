import { AGCStorageService } from "@hw-agconnect/storage-types";
import AGCStorage = AGCStorageService.AGCStorage;
export declare class IndexedDBImpl implements AGCStorage {
    private static indexedDBInsMap;
    private readonly DB_NAME;
    private readonly OBJECT_STORE_NAME;
    private readonly KEY_PATH;
    private readonly VERSION;
    private agcCryptImpl;
    static getInstance(name: string, cryptImpl?: any): IndexedDBImpl;
    private initIndexedDb;
    get(key: string): Promise<any>;
    set(key: string, value: any): Promise<void>;
    remove(key: string): Promise<void>;
}
