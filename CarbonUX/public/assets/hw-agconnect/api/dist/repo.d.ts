import { ServiceRepository, ServiceInfo } from '@hw-agconnect/api-types';
declare class ServiceRepositoryImpl implements ServiceRepository {
    private readonly servicesIdentifierMap;
    private readonly registeredService;
    registryService(serviceInfo: ServiceInfo): void;
    unregistryService(serviceInfo: ServiceInfo): void;
    getService<T>(name: string, data: any, category?: string): T | null;
}
declare const repo: ServiceRepositoryImpl;
export { repo };
