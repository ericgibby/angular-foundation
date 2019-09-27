import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent } from './menu/menu.component';
import { TableComponent } from './table/table.component';

const libraryComponents = [TableComponent, MenuComponent];

@NgModule({
	declarations: [...libraryComponents],
	imports: [BrowserModule],
	exports: [...libraryComponents]
})
export class AngularFoundationModule {}
