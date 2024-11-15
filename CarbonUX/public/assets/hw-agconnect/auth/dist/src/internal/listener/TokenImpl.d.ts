import { Token } from "@hw-agconnect/baseservice-types";
import { TokenSnapshot, TokenState } from "@hw-agconnect/auth-types";
export declare class TokenImpl implements TokenSnapshot, Token {
    state: TokenState | undefined;
    expiration: number;
    issuedAt: string;
    notBefore: string;
    tokenString: string;
    constructor(expiration: number, issuedAt: string, notBefore: string, tokenString: string);
    getState(): TokenState | undefined;
    getToken(): string;
}
