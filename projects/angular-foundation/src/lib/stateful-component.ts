import { ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';

export abstract class StatefulComponent<StateType> implements OnChanges {
	private inputs: { [key: string]: boolean };
	state: Partial<StateType> = {};

	constructor(protected cd: ChangeDetectorRef) {}

	protected getValue<T>(input: string | T): Partial<T> {
		return typeof input === 'string' ? (JSON.parse(input) as Partial<T>) : input;
	}

	protected setState(state: Partial<StateType>) {
		this.state = { ...this.state, ...state };
		this.cd.markForCheck();
	}

	registerStatefulInput(key: string, isString: boolean) {
		if (!this.inputs) {
			this.inputs = {};
		}
		this.inputs[key] = isString;
	}

	ngOnChanges(changes: SimpleChanges) {
		const updatedState = Object.keys(changes).reduce((state: any, key: string) => {
			if (!this.inputs.hasOwnProperty(key)) {
				return state;
			}
			let value = changes[key].currentValue;
			if (typeof value === 'string' && !this.inputs[key]) {
				value = JSON.parse(value);
			}
			return { ...state, [key]: value };
		}, {});

		this.setState(updatedState);
	}
}
