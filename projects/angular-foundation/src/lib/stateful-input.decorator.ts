import { StatefulComponent } from './stateful-component';

export function StatefulInput<StateType>(isString = false) {
	return (target: StatefulComponent<StateType>, propertyName: string) => {
		target.registerStatefulInput(propertyName, isString);
	};
}
