import { BindingModel } from '../binding-model';
export class ValueBindingModel extends BindingModel {
    constructor(name: string, keyword: string){
        super(name, keyword);
        this.setExpression = (self: any, element: any): void => {
            const elemValue = element.value;
            self[name].set(elemValue);
        };
        this.getExpression = (self: any,  element: any): void => {
            element.value = self[name].get();
        }
    }
}