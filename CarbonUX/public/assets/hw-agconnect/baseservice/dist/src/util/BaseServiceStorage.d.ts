import { AGCStorageService } from "@hw-agconnect/storage-types";
import { AGCInstance } from "@hw-agconnect/instance-types";
export declare class BaseServiceStorage {
    private static instance;
    static getInstance(): BaseServiceStorage;
    getStorage(instance: AGCInstance): AGCStorageService.AGCStorage | undefined;
}
