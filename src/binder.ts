import { BindingModel } from './models/binding-model';
import { BindingConstants } from './constants/binding-constants';
export class Binder {
    private eventDictionary: { [id: string]: string[]; } = {};
    constructor() {
        this.eventDictionary[BindingConstants.valueBinding] = ["input", "change"];
    }
    public bind(vm: any, element: Element, model: BindingModel) {
        let eventsArr = this.eventDictionary[model.keyword];
        for (let i = 0; i < eventsArr.length; i++) {
            const event = eventsArr[i];
            element.addEventListener(event, (event) => {
                model.expression(vm, element);
            });
        }
    }
}
