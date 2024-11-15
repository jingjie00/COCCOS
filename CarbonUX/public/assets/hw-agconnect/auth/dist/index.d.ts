import { AGCApi } from '@hw-agconnect/api-types';
import { InstanceMap } from '@hw-agconnect/core';
import { AGCAuth } from '@hw-agconnect/auth-types';
import { AGCAuthImpl } from './src/auth';
import { PhoneUserImpl } from './src/internal/user/PhoneUser';
import { EmailUserImpl } from './src/internal/user/EmailUser';
import { EmailAuthProvider } from './src/internal/provider/EmailAuthProvider';
import { PhoneAuthProvider } from './src/internal/provider/PhoneAuthProvider';
import { WeixinAuthProvider } from './src/internal/provider/WeixinAuthProvider';
import { SelfBuildAuthProvider } from './src/internal/provider/SelfBuildAuthProvider';
import { QQAuthProvider } from './src/internal/provider/QQAuthProvider';
import { HwIdAuthProvider } from './src/internal/provider/HwIdAuthProvider';
import { AlipayAuthProvider } from './src/internal/provider/AlipayAuthProvider';
import { HwGameAuthProviderImpl } from './src/internal/provider/HwGameAuthProvider';
import "@hw-agconnect/network";
import "@hw-agconnect/storage";
import "@hw-agconnect/util";
import '@hw-agconnect/log';
import "@hw-agconnect/baseservice";
export { AGCAuthException } from "./src/internal/exception/AGCAuthException";
declare module '@hw-agconnect/api-types' {
    interface AGCApi {
        auth: {
            (name?: string): AGCAuth;
            EmailAuthProvider: typeof EmailAuthProvider;
            PhoneAuthProvider: typeof PhoneAuthProvider;
            WeixinAuthProvider: typeof WeixinAuthProvider;
            SelfBuildAuthProvider: typeof SelfBuildAuthProvider;
            QQAuthProvider: typeof QQAuthProvider;
            HwIdAuthProvider: typeof HwIdAuthProvider;
            AlipayAuthProvider: typeof AlipayAuthProvider;
            HwGameAuthProvider: typeof HwGameAuthProviderImpl;
            Action: typeof Action;
            PhoneUser: typeof PhoneUserImpl;
            EmailUser: typeof EmailUserImpl;
        };
    }
}
declare module './index' {
    interface _ extends AGCApi {
    }
}
export declare const creator: InstanceMap<AGCAuthImpl>;
declare enum Action {
    ACTION_REGISTER_LOGIN = 1001,
    ACTION_RESET_PASSWORD = 1002
}
