import { AGCStorageService } from '@hw-agconnect/storage-types';
import AGCStorage = AGCStorageService.AGCStorage;
export declare class MiniProgramStorage implements AGCStorage {
    private static MiniProgramStorageMap;
    private agcCryptImpl;
    static getInstance(name: string, cryptImpl?: any): MiniProgramStorage;
    get(key: string): Promise<any>;
    set(key: string, value: any): Promise<void>;
    remove(key: string): Promise<void>;
}
