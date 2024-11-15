import { AGCStorageService } from "@hw-agconnect/storage-types";
import AGCStorage = AGCStorageService.AGCStorage;
export declare class Memorystorage implements AGCStorage {
    private static memoryInsMap;
    private storage;
    static getInstance(name: string, cryptImpl?: any): Memorystorage;
    get(key: string): Promise<string | null>;
    remove(key: string): Promise<void>;
    set(key: string, value: any): Promise<void>;
}
