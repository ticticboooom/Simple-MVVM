import { DOMConstants } from './constants/dom-constants';
import { Observable } from './observable';
import { BindingModel } from './models/binding-model';
import { BindingConstants } from './constants/binding-constants';
export class Binder {
	private eventDictionary: { [id: string]: string[] } = {};
	constructor() {
		this.eventDictionary[BindingConstants.valueBinding] = ['input'];
	}
	public bind(vm: any, element: Element, model: BindingModel) {
		let eventsArr = this.eventDictionary[model.keyword];
		model.initExpression(vm, element);
		if (eventsArr) {
			for (let i = 0; i < eventsArr.length; i++) {
				const event = eventsArr[i];
				element.addEventListener(event, event => {
					model.setExpression(vm, element);
				});
			}
		}
		const key = element.getAttribute(DOMConstants.boundNameAttribute);
		if (vm.hasOwnProperty(key)) {
			vm[key].setExpressions.push(() => {
				model.getExpression(vm, element);
			});
		}
	}
}
