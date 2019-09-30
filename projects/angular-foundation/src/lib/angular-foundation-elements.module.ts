import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { kebabCase } from 'lodash';
import { AF_COMPONENTS, SharedModule } from './shared.module';

@NgModule({
	declarations: [],
	imports: [SharedModule],
	entryComponents: [AF_COMPONENTS]
})
export class AngularFoundationElementsModule {
	constructor(injector: Injector) {
		AF_COMPONENTS.forEach(component => {
			const selector = 'af-' + kebabCase(component.name.replace(/Component/i, ''));
			const elem = createCustomElement(component, { injector });
			customElements.define(selector, elem);
		});
	}
}
