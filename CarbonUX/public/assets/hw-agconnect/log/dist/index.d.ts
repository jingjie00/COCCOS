export declare enum LogLevel {
    DEBUG = 0,
    VERBOSE = 1,
    INFO = 2,
    WARN = 3,
    ERROR = 4,
    SILENT = 5
}
export type LogProvider = (moduleName: string, logType: LogLevel, ...args: unknown[]) => void;
export declare class Logger {
    private static readonly consoleType;
    static logInstanceArray: Logger[];
    moduleName: string;
    logLevel: LogLevel;
    private userLogProvider;
    private logProvider;
    static createLogger(moduleName: string): Logger;
    setLogProvider(logProvider: LogProvider): void;
    setUserLogProvider(userLogProvider: LogProvider | null): void;
    debug(...args: unknown[]): void;
    log(...args: unknown[]): void;
    info(...args: unknown[]): void;
    warn(...args: unknown[]): void;
    error(...args: unknown[]): void;
    private doLog;
}
export declare function setGlobalLogLevel(logLevel: LogLevel): void;
export declare function setGlobalUserLogHandler(userLogProvider: LogProvider | null): void;
