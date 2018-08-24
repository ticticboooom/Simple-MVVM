import { Binder } from './binder';
import { Selector } from './selector';
import { Parser } from './parser';
import { Observable } from './observable';

export class MVVM {
    constructor() { }
    public static bindToView(viewModel: any) {
        const toBind = Selector.selectElements();
        for (const elem of toBind) {
            const bindingAttribute = Selector.getBinding(elem);
            let bindingModels = Parser.parse(bindingAttribute);
            for (const model of bindingModels) {
                const binder = new Binder();
                binder.bind(viewModel, elem, model);
            }
        }
    }
    public static observable(name: string): Observable {
        return new Observable(name);
     }
}
