export class Observable {
    constructor(private name: string) { }
    public setExpressions: Function[] = [];
    private value: string | number | boolean | undefined | null = null;
    public set(val: string | number | boolean | undefined | null) {
        this.value = val;
        for (const func of this.setExpressions) {
            func();
        }
    }
    public get() {
        return this.value;
    }
}