import { ClientInfoService } from "./index";
import { EnvironmentUtil } from "./environment";
import { AGCInstance } from "@hw-agconnect/instance-types";
export declare class ClientInfoUtilImpl implements ClientInfoService.ClientInfoUtil {
    private instance;
    constructor(instance: AGCInstance);
    getAaid(): Promise<string>;
    getEnvironmentUtil(): EnvironmentUtil;
}
