import { AGCInstance } from '@hw-agconnect/instance-types';
import '@hw-agconnect/log';
export { AGCError, ErrorCode } from "./src/error/AGCError";
export { AGCErrorCode } from "./src/error/AGCErrorCode";
export { BaseResponse } from "./src/server/BaseResponse";
export { ConnectRet } from "./src/server/ConnectRet";
export { RequestConstructor } from "./src/server/RequestConstructor";
import { AGCApi } from '@hw-agconnect/api-types';
declare module '@hw-agconnect/api-types' {
    interface AGCApi {
        instance(name?: string): AGCInstance;
    }
}
declare module './index' {
    interface _ extends AGCApi {
    }
}
