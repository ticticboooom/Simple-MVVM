import { BindingModel } from '../binding-model';
export class AttributeBindingModel extends BindingModel {
    constructor(name: any, keyword: string){
        super(name, keyword);
        
        this.setExpression = (self: any, element: any): void => {
            const elemValue = element.getAttribute(keyword);
            self[this.name].set(elemValue);
        };
        this.getExpression = (self: any,  element: any): void => {
            element.setAttribute(keyword, self[this.name].get());
        }
    }
}