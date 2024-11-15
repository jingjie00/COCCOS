import { ErrorCode } from "./AGCError";
/**
 * Common Exception .10000-10999
 */
export declare class AGCErrorCode {
    static readonly AGC_INNER_ERROR: ErrorCode;
    static readonly NETWORK_REQUEST_ERROR: ErrorCode;
    static readonly GET_AAID_ERROR: ErrorCode;
    static readonly ABTEST_LOAD_EXPERIMENTS_ERROR: ErrorCode;
    static readonly ABTEST_SAVE_EXPERIMENTS_ERROR: ErrorCode;
    static readonly ABTEST_REPLACE_EXPERIMENTS_ERROR: ErrorCode;
    static readonly FAIL_TO_GET_STORAGE_SERVICE: ErrorCode;
    static readonly FAIL_TO_GET_NETWORK_SERVICE: ErrorCode;
    static readonly REMOVE_TOKEN_FAILED: ErrorCode;
    static readonly GET_TOKEN_FAILED: ErrorCode;
    static readonly AGC_INIT_ERROR: ErrorCode;
    static readonly FAIL_TO_GET_CRIDENTIAL_SERVICE: ErrorCode;
    static readonly WEBSOCKET_NOT_SUPPORT: ErrorCode;
    static readonly WEBSOCKET_ERROR: ErrorCode;
}
