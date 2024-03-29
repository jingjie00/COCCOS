import '@hw-agconnect/log';
import { EnvironmentUtil } from "./environment";
export * from './environment';
export declare namespace ClientInfoService {
    const enum Naming {
        value = "ClientInfoService"
    }
    interface ClientInfoUtil {
        getAaid(): Promise<string>;
        getEnvironmentUtil(): EnvironmentUtil;
    }
}
export declare namespace ObserverUtil {
    type NextFn<T> = (value: T) => void;
    type ErrorFn = (error: Error) => void;
    type CompleteFn = () => void;
    type Unsubscribe = () => void;
    interface Observer<T> {
        next?: NextFn<T> | null;
        error?: ErrorFn | null;
        complete?: CompleteFn | null;
    }
    type Subscribe<T> = (next?: NextFn<T> | Observer<T> | null, error?: ErrorFn | null, complete?: CompleteFn | null) => Unsubscribe;
    class ObserverImpl<T> implements Observer<T> {
        next?: NextFn<T> | null;
        error?: ErrorFn | null;
        complete?: CompleteFn | null;
        constructor(nextOrObserver?: NextFn<T> | Observer<T> | null, error?: ErrorFn | null, complete?: CompleteFn | null);
    }
}
