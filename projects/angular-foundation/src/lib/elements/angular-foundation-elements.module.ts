import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MenuComponent } from '../menu/menu.component';
import { TableComponent } from '../table/table.component';

const elements: Array<{ selector: string; component: any }> = [
	{ selector: 'af-menu', component: MenuComponent },
	{ selector: 'af-table', component: TableComponent }
];

const components = [MenuComponent, TableComponent];

@NgModule({
	declarations: [],
	imports: [CommonModule],
	entryComponents: [...components]
})
export class AngularFoundationElementsModule {
	constructor(injector: Injector) {
		elements.forEach(({ selector, component }) => {
			const elem = createCustomElement(component, { injector });
			customElements.define(selector, elem);
		});
	}
}
