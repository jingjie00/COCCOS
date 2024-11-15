export declare class VerifyCodeSettings {
    private action;
    private lang;
    private sendInterval;
    constructor(action: number, lang: string, sendInterval: number);
    /**
     * 获取验证码类型
     *
     * @return 验证码类型
     */
    getAction(): number;
    /**
     * 获取语言
     *
     * @return 语言
     */
    getLang(): string;
    /**
     * 获取发送间隔
     *
     * @return 发送间隔
     */
    getSendInterval(): number;
    /**
     * 设置验证码类型
     *
     * @param action 验证码类型
     * @return 构造器
     */
    setAction(action: number): void;
    /**
     * 设置语言
     *
     * @param locale 发送验证码的所选语言的locale,Locale必须包含language和country
     * @return 构造器
     */
    setLang(lang: string): void;
    /**
     * 验证码的发送间隔
     *
     * @param sendInterval 发送间隔，30-120s
     * @return 构造器
     */
    setSendInterval(sendInterval: number): void;
}
