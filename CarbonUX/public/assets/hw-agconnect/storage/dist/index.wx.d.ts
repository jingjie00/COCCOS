import { AGCStorageService } from "@hw-agconnect/storage-types";
import Persistence = AGCStorageService.Persistence;
export declare class WxFactoryImpl implements AGCStorageService.Factory {
    private name;
    constructor(name: string);
    getStorageInstance(persistence?: Persistence, cryptImpl?: any): AGCStorageService.AGCStorage;
    createPersistentStorage(): AGCStorageService.AGCStorage;
    createTemporaryStorage(): AGCStorageService.AGCStorage;
    createMemoryStorage(): AGCStorageService.AGCStorage;
}
