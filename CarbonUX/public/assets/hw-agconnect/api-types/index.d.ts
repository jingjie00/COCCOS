export class AGCApi {
}

export interface ServiceInfo<T = any, V = any> {
    name: string,
    serviceFactory: ServiceFactory<T,V>,
}

export interface Property {
    [key: string]: unknown;
}

export interface ApiManager extends AGCApi  {
    registerApiProvider<T,V>(name: string, factory: ServiceFactory<T,V>): void; // depended by Cloud-Storage/HA
    registerApiProvider<T,V>(name: string, factory: ServiceFactory<T,V>, props:Property): void; // depended by Cloud-Storage/HA
    registerInternalService<T,V>(serviceInfo:ServiceInfo<T,V>): void;
}

export interface ServiceRepository {
    getService<T>(name:string, data:any, category?:string):T | null; // depended by Cloud-Storage/HA
}

export type ServiceFactory<T, V> = (
    ...args: [V],
) => T
