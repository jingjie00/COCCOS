import { AGCStorageService } from "@hw-agconnect/storage-types";
import AGCStorage = AGCStorageService.AGCStorage;
export declare class NodeStorage implements AGCStorage {
    private static nodeMap;
    static filePath: string;
    private agcCryptImpl;
    static getInstance(name: string, cryptImpl?: any): NodeStorage;
    get(key: string): Promise<any>;
    set(key: string, value: any): Promise<void>;
    remove(key: string): Promise<void>;
}
