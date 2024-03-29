interface Token {
    expiration: number;
    issuedAt: string;
    notBefore: string;
    tokenString: string
}

export namespace AuthService {
    export const enum Naming {
        value = "AuthService"
    }
}

// depended by Cloud-Storage/HA
export namespace CredentialsService {
    export const enum Naming {
        value = "CredentialsService"
    }

    export interface CredentialsProvider {
        getToken(forceRefresh?:boolean): Promise<Token>;
        removeToken():Promise<void>
    }
}
