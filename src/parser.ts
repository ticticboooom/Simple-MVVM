import { AttributeBindingModel } from './models/binding-models/attribute-binding.model';
import { TextBindingModel } from './models/binding-models/text-binding.model';
import { ValueBindingModel } from './models/binding-models/value-binding.model';
import { BindingConstants } from './constants/binding-constants';
import { BindingModel } from './models/binding-model';
import { DOMConstants } from './constants/dom-constants';
import { ExpressionParser } from './models/expression-parser';
export class Parser {
    public static parse(val: string): BindingModel[] {
        const cleanVal = val.replace(/\s/g, '');
        const expObject = ExpressionParser.parse(cleanVal);
        let value: BindingModel[] = [];
        for (const key in expObject) {
            if (key == BindingConstants.valueBinding) {
                value.push(new ValueBindingModel(expObject[key], key));
            } else if (key == BindingConstants.textBinding) {
                value.push(new TextBindingModel(expObject[key], key));
            }
            else if (key == BindingConstants.attributeBinding) {
                for (var attrKey in expObject[key]) {
                    value.push(new AttributeBindingModel(expObject[key][attrKey], attrKey));
                }
            }
        }
        return value;
    }
}
