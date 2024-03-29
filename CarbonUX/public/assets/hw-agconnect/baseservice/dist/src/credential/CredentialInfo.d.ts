import { Token } from "@hw-agconnect/baseservice-types";
export declare class CredentialInfo implements Token {
    expiration: number;
    issuedAt: string;
    notBefore: string;
    tokenString: string;
    lastRefreshTime: number;
    private TWO_MINUTES_EARLY;
    private ONE_HOUR;
    constructor();
    constructFromJson(info: any): void;
    isValid(): boolean;
    allowRefresh(): boolean;
}
