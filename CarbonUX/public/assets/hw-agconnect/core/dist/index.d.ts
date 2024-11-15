export declare const DEFAULT_CATEGORY = "[DEFAULT_CATEGORY]";
export declare class Singleton<T> {
    private factory;
    private instance?;
    constructor(creator: () => T);
    get(): T;
}
export declare class InstanceMap<T> {
    private factory;
    private instanceMap;
    constructor(creator: (args: any[]) => T);
    get(args?: any): T;
}
