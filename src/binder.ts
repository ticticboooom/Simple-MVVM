import { DOMConstants } from './constants/dom-constants';
import { Observable } from './observable';
import { BindingModel } from './models/binding-model';
import { BindingConstants } from './constants/binding-constants';
export class Binder {
    private eventDictionary: { [id: string]: string[]; } = {};
    constructor() {
        this.eventDictionary[BindingConstants.valueBinding] = ["input"];
    }
    public bind(vm: any, element: Element, model: BindingModel) {
        let eventsArr = this.eventDictionary[model.keyword];
        model.initExpression(vm, element);
        for (let i = 0; i < eventsArr.length; i++) {
            const event = eventsArr[i];
            element.addEventListener(event, (event) => {
                model.setExpression(vm, element);
            });
        }

        for (const key in vm) {
            if (vm.hasOwnProperty(key) && element.getAttribute(DOMConstants.boundNameAttribute) == key) {
                vm[key].setExpression = () => {
                    model.getExpression(vm, element);
                }
            }
        }
    }
}
