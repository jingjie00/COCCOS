import { BaseResponse } from "@hw-agconnect/instance";
import { TokenInfo } from "../entity/TokenInfo";
export declare class RefreshTokenResponse extends BaseResponse {
    accessToken: TokenInfo;
    productId: string;
    uid: string;
    constructResponse(response: any): void;
}
