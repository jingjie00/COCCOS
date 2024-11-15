import '@hw-agconnect/instance';
import { AGCInstance } from "@hw-agconnect/instance-types";
import { StoredUserInfo } from "./StoredUserInfo";
import { AGConnectDefaultUser } from "../user/AGConnectDefaultUser";
import { TokenState } from "@hw-agconnect/auth-types";
export declare class StoredUserManager {
    private instance;
    private user;
    private agcConfig;
    constructor(instance?: AGCInstance);
    getStoredUser(): Promise<StoredUserInfo | null>;
    updateUserInfo(userInfo: StoredUserInfo | null): Promise<void>;
    updateStoredUser(user: AGConnectDefaultUser | null, state?: TokenState): Promise<void>;
    private loadStoredUser;
    private saveCurrentUser;
    private getUserKey;
}
