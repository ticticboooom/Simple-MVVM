export class BindingModel {
    public setExpression: (self: object, element: Element, ) => any;
    public getExpression: (self: object,  element: Element) => any;
    public initExpression: (self: object,  element: Element) => any;
    public keyword: string;
}