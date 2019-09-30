import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { TableComponent } from './table/table.component';

export const AF_COMPONENTS = [TableComponent, MenuComponent];

@NgModule({
	declarations: [...AF_COMPONENTS],
	imports: [CommonModule],
	exports: [...AF_COMPONENTS]
})
export class SharedModule {}
