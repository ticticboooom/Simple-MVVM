import { BindingModel } from './binding-model';
export class ExpressionParser {
	public static parse(exp: string): any {
		let bindingSplit = exp.split('|');
		let model: any = {};
		for (const binding of bindingSplit) {
			var bindingObject: any = {};
			let highKeyValueSplit = binding.replace(/(:){1}/, '\n').split('\n');
			for (var i = 1; i < highKeyValueSplit.length; i += 2) {
				let bindingName = highKeyValueSplit[i - 1];
				let objectSplit = highKeyValueSplit[i].replace(/[{}]/g, '');
				let propSplit = objectSplit.split(',');
				for (const prop of propSplit) {
                    let keyValue = prop.split(':');
                    if (keyValue.length > 1) {   
                        bindingObject[keyValue[0]] = keyValue[1];
                    } else {
                        bindingObject = keyValue[0];
                    }
				}
				model[bindingName] = bindingObject;
			}
		}
		return model;
	}
}
