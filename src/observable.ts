export class Observable {
    constructor(private name: string) { }
    public setExpression: Function;
    private value: string | number | boolean | undefined | null = null;
    public set(val: string | number | boolean | undefined | null) {
        this.value = val;
        this.setExpression();
    }
    public get() {
        return this.value;
    }
}