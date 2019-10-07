import { ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';

export enum StatefulInputType {
	Undefined = 'undefined',
	Object = 'object',
	Boolean = 'boolean',
	Number = 'number',
	BigInt = 'bigint',
	String = 'string',
	Symbol = 'symbol',
	Function = 'function'
}

export abstract class StatefulComponent implements OnChanges {
	private inputs: { [key: string]: StatefulInputType };
	state: { [key: string]: any } = {};

	constructor(protected cd: ChangeDetectorRef) {}

	protected getValue<T>(input: string | T): Partial<T> {
		return typeof input === 'string' ? (JSON.parse(input) as Partial<T>) : input;
	}

	protected setState(state: { [key: string]: any }) {
		this.state = { ...this.state, ...state };
		this.cd.markForCheck();
	}

	registerStatefulInput(key: string, inputType: StatefulInputType) {
		if (!this.inputs) {
			this.inputs = {};
		}
		this.inputs[key] = inputType;
	}

	ngOnChanges(changes: SimpleChanges) {
		const updatedState = Object.keys(changes).reduce((state: any, key: string) => {
			if (!this.inputs.hasOwnProperty(key)) {
				return state;
			}
			let value = changes[key].currentValue;
			if (typeof value !== this.inputs[key] && !!value) {
				value = JSON.parse(value);
			}
			return { ...state, [key]: value };
		}, {});

		this.setState(updatedState);
	}
}
