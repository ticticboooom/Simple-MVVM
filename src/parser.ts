import { BindingConstants } from './constants/binding-constants';
import { BindingModel } from './models/binding-model';
export class Parser {
    public static parse(val: string): BindingModel {
        const cleanVal = val.replace(/\s/g, '');
        const exp = this.extractExpression(cleanVal);
        const keyword = this.extractKeyword(cleanVal);
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
            model.expression = this.generateValueFunction(exp);
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
    private static generateValueFunction(name: string): (self: object,  element: Element) => any {
        const func = ((self: object,  element: any): void => {
            const elemValue = element.value;
            self[name] = elemValue;
        });
        return func;
    }
}