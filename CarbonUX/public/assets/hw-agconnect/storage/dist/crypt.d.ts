import { AGCStorageService } from "@hw-agconnect/storage-types";
import ICrypt = AGCStorageService.ICrypt;
export declare class AgcCrypt {
    private encryptImpl;
    constructor(crypt?: ICrypt);
    setEncryptImp(encryptImpl: any): void;
    decrypt(value: string): string;
    encrypt(value: string): string;
}
