import { BaseResponse } from "@hw-agconnect/instance";
export declare class VerifyCodeResponse extends BaseResponse {
    private shortestInterval;
    private validityPeriod;
    constructResponse(response: any): void;
    getShortestInterval(): string;
    setShortestInterval(shortestInterval: string): void;
    getValidityPeriod(): string;
    setValidityPeriod(validityPeriod: string): void;
}
