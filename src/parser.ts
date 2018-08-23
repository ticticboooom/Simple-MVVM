import { TextBindingModel } from './models/binding-models/text-binding.model';
import { ValueBindingModel } from './models/binding-models/value-binding.model';
import { BindingConstants } from './constants/binding-constants';
import { BindingModel } from './models/binding-model';
import { DOMConstants } from './constants/dom-constants';
export class Parser {

    public static parse(val: string): BindingModel {
        const cleanVal = val.replace(/\s/g, '');
        const keyword = this.extractKeyword(cleanVal);
        const exp = this.extractExpression(cleanVal);
        if (keyword == BindingConstants.valueBinding) {
            const model = new ValueBindingModel(exp, keyword);
            return model;
        }
        else if (keyword == BindingConstants.textBinding) {
            const model = new TextBindingModel(exp, keyword);
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

    private static isName(exp: string): boolean {
        const match = exp.match(/[\w]+/g);
        if (match) {
            if (match.length == 1) {
                return true;
            }
        }
        return false;
    }
}