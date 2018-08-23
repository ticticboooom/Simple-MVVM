import { BindingModel } from '../binding-model';
export class TextBindingModel extends BindingModel {
    constructor(name: string, keyword: string){
        super(name, keyword);
        this.setExpression = (self: any, element: any): void => { };
        this.getExpression = (self: object,  element: any): void => {
            element.innerHTML = self[name].get();
        }
    }
}