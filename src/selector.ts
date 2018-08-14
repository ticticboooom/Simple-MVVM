import { DOMConstants } from './constants/dom-constants';
export class Selector {
	public static selectElements(): Array<Element> {
		let elements = document.querySelectorAll(`[${DOMConstants.bindingAttribute}]`);
		const arr = new Array<Element>();
		for (let i = 0; i < elements.length; i++) {
			const element = elements[i];
            arr.push(element)
        }
        return arr;
    }
    public static getBinding(elem: Element): string {
        return elem.getAttribute(DOMConstants.bindingAttribute);
    }
}
