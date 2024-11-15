import { ErrorCode } from "@hw-agconnect/instance";
export declare class AGCAuthErrorCode {
    /**
     * AccessTokenΪ��
     * �������µ�¼
     */
    static readonly NULL_TOKEN: ErrorCode;
    /**
     * δ��¼ʱ��ȡAccessToken��Ϣ
     */
    static readonly NOT_SIGN_IN: ErrorCode;
    /**
     * �û��Ѿ�������Provider
     */
    static readonly USER_LINK_FAILED: ErrorCode;
    /**
     * �û�������Providerʧ��
     */
    static readonly USER_UNLINK_FAILED: ErrorCode;
    /**
     * �Ѿ���¼��һ���û�����δ�ǳ������¼�˻�
     */
    static readonly ALREADY_SIGN_IN_USER: ErrorCode;
    /**
     * �ʼ���֤��Ϊ��
     */
    static readonly EMAIL_VERIFICATION_IS_EMPTY: ErrorCode;
    /**
     * �绰��֤��Ϊ��
     */
    static readonly PHONE_VERIFICATION_IS_EMPTY: ErrorCode;
    /**
     * listener�Ƿ�
     */
    static readonly ILLEGAL_TOKEN_LISTENER: ErrorCode;
    /**
     * CustomAuthProvider�Ƿ�
     */
    static readonly ILLEGAL_CUSTOM_AUTH_PROVIDER: ErrorCode;
    /**
     * ��ȡclienttokenʧ��
     */
    static readonly FAIL_TO_GET_CREDENTIAL_SERVICE: ErrorCode;
    /**
     * ��ȡnetworkģ��ʧ��
     */
    static readonly FAIL_TO_GET_NETWORK_SERVICE: ErrorCode;
    /**
     * ��ȡstorageģ��ʧ��
     */
    static readonly FAIL_TO_GET_STORAGE_SERVICE: ErrorCode;
    /**
     * ��ȡ�û�����ʧ��
     */
    static readonly FAIL_TO_GET_USER_EXTRA: ErrorCode;
    /**
     * ��ȡaccesstokenʧ��
     */
    static readonly FAIL_TO_GET_ACCESS_TOKEN: ErrorCode;
    /**
     * ����֤ʧ��
     */
    static readonly FAIL_TO_DO_USER_REAUTH: ErrorCode;
    /**
     * �����û���Ϣʧ��
     */
    static readonly FAIL_TO_UPDATE_PROFILE: ErrorCode;
    /**
     * ��������ʧ��
     */
    static readonly FAIL_TO_UPDATE_EMAIL: ErrorCode;
    /**
     * �����ֻ���ʧ��
     */
    static readonly FAIL_TO_UPDATE_PHONE: ErrorCode;
    /**
     * ��������ʧ��
     */
    static readonly FAIL_TO_UPDATE_PASSWORD: ErrorCode;
    /**
     * ��������ʧ��
     */
    static readonly PASSWORD_IS_EMPTY: ErrorCode;
    /**
     * ��������ʧ��
     */
    static readonly FAIL_TO_GET_VERIFY_CODE: ErrorCode;
    /**
     * ���������û�ʧ��
     */
    static readonly FAIL_TO_CREAT_EMAIL_USER: ErrorCode;
    /**
     * ɾ���û�ʧ��
     */
    static readonly FAIL_TO_CREAT_PHONE_USER: ErrorCode;
    /**
     * ��������ʧ��
     */
    static readonly SIGN_IN_FAILED: ErrorCode;
    /**
     * ɾ���û�ʧ��
     */
    static readonly DELETE_USER_FAILED: ErrorCode;
    /**
     * �ǳ��û�ʧ��
     */
    static readonly SIGN_OUT_FAILED: ErrorCode;
    /**
     * ��ȡ�û���Ϣʧ��
     */
    static readonly GET_CURRENT_USER_FAILED: ErrorCode;
    /**
     * ������¼ʧ��
     */
    static readonly SIGN_IN_ANONYMOUS_FAILED: ErrorCode;
    /**
     * ��ȡutilģ��ʧ��
     */
    static readonly FAIL_TO_GET_UTIL_SERVICE: ErrorCode;
    /**
     * ��������ʧ��
     */
    static readonly FAIL_TO_RESET_PASSWORD_EMAIL: ErrorCode;
    /**
     * ��������ʧ��
     */
    static readonly FAIL_TO_RESET_PASSWORD_PHONE: ErrorCode;
    /**
     * �ڲ�����
     */
    static readonly AUTH_INNER_ERROR: ErrorCode;
    /**
     * ������ʼ���ַ���Ϸ�
     */
    static readonly INVALID_EMAIL: ErrorCode;
    /**
     * ������ֻ����벻�Ϸ�
     */
    static readonly INVALID_PHONE: ErrorCode;
}
