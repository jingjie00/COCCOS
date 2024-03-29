export namespace AGCStorageService {
    export const enum Naming {
        value = "AGCStorageService"
    }

    export const enum Persistence {
        persistenceStorage,
        temporaryStorage,
        memoryStorage
    }

    export interface AGCStorage {

        /**
         * Fetches key and passes the result to callback, along with an Error if there is any.
         */
        get(key: string, crypt?: ICrypt): Promise<any>;

        /**
         * Sets value for key and calls callback on completion, along with an Error if there is any
         */
        set(key: string, value: any, crypt?: ICrypt): Promise<void>;

        remove(key: string): Promise<void>;
    }

    export interface Factory {

        getStorageInstance(persistence?: Persistence, cryptImpl?: any): AGCStorageService.AGCStorage;

        createPersistentStorage(): AGCStorageService.AGCStorage;

        createTemporaryStorage(): AGCStorageService.AGCStorage;

        createMemoryStorage(): AGCStorageService.AGCStorage;
    }

    export interface ICrypt {
        decrypt(value: string): string;
        encrypt(value: string): string;
    }
}



