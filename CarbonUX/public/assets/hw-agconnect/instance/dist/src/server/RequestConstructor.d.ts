export interface RequestConstructor {
    /**
     * 从当前request对象中的属性，构造url
     */
    getUrl(): string;
    /**
     * 从当前request对象中的属性，构造header，如
     */
    getHeader(): any;
    /**
     * 从当前request对象中的属性，构造body体，如
     */
    getBody(): any;
}
