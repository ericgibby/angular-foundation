import { StatefulComponent, StatefulInputType } from './stateful-component';

export function StatefulInput(inputType: StatefulInputType) {
	return (target: StatefulComponent, propertyName: string) => {
		target.registerStatefulInput(propertyName, inputType);
	};
}
