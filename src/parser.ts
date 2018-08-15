import { BindingConstants } from './constants/binding-constants';
import { BindingModel } from './models/binding-model';
import { DOMConstants } from './constants/dom-constants';
export class Parser {
    public static parse(val: string): BindingModel {
        const cleanVal = val.replace(/\s/g, '');
        const keyword = this.extractKeyword(cleanVal);
        const exp = this.extractExpression(cleanVal);
        if (keyword == BindingConstants.valueBinding) {
            const model = this.parseValueBinding(exp);
            model.keyword = keyword;
            return model;
        }
        return null;
    }

    private static extractExpression(val: string): string {
        const expression = val.replace(/^[\w]+[:]/g, "");
        return expression;
    }
    private static extractKeyword(val: string): string {
        const keyword = val.replace(/[:][\W\w]+$/g, '');
        return keyword;
    }
    private static parseValueBinding(exp: string): BindingModel {
        const model = new BindingModel();
        if (this.isName(exp)) {
            model.setExpression = this.generateValueSetFunction(exp);
            model.getExpression = this.generateValueGetFunction(exp);
            model.initExpression = this.generateValueInitFunction(exp);
        }
        return model;
    }

    private static isName(exp: string): boolean {
        const match = exp.match(/[\w]+/g);
        if (match) {
            if (match.length == 1) {
                return true;
            }
        }
        return false;
    }
    private static generateValueSetFunction(name: string): (self: object,  element: Element) => any {
        const func = ((self: object,  element: any): void => {
            const elemValue = element.value;
            self[name].set(elemValue);
        });
        return func;
    }
    private static generateValueGetFunction(name: string): (self: object,  element: Element) => any {
        const func = ((self: object,  element: any): void => {
            element.value = self[name].get();
        });
        return func;
    }
    private static generateValueInitFunction(name: string): (self: object,  element: Element) => any {
        const func = ((self: object,  element: any): void => {
            element.setAttribute(DOMConstants.boundNameAttribute, name);
        });
        return func;
    }
}