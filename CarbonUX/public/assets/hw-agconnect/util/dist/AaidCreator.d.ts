import "@hw-agconnect/instance";
import "@hw-agconnect/storage";
import { AGCInstance } from "@hw-agconnect/instance-types";
export declare class AaidCreator {
    static persistence: number;
    static INSTANCE: AaidCreator;
    private storageImpl;
    getAaid(instance: AGCInstance): Promise<string>;
    /**
     * 随机字符串生成算法，可生成指定长度的随机字符串，并可以指定字符范围
     */
    private getRandomString;
}
