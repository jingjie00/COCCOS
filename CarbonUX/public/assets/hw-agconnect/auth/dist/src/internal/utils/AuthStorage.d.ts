import { AGCStorageService } from "@hw-agconnect/storage-types";
import { AGCInstance } from "@hw-agconnect/instance-types";
export declare class AuthStorage {
    private static instance;
    static getInstance(): AuthStorage;
    getStorage(instance: AGCInstance): AGCStorageService.AGCStorage | undefined;
}
