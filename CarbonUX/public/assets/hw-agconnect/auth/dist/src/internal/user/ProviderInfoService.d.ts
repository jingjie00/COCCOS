export declare class ProviderInfoService {
    providerInfo: Array<{
        [key: string]: string;
    }>;
    getProviderInfo(): Array<{
        [key: string]: string;
    }>;
    setProviderInfo(providerInfo: Array<{
        [key: string]: string;
    }>): void;
    updateProvider(info: {
        [key: string]: string;
    }): void;
    updateProviderInfo(provider: number, key: string, value: string): void;
    updateEmail(newEmail: string): void;
    updatePhone(newPhone: string): void;
    deleteProvider(provider: string): void;
    findProviderIndex(provider: string): number | undefined;
}
