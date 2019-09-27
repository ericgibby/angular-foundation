import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { GridComponent } from './grid/grid.component';

const libraryComponents = [GridComponent, MenuComponent];

@NgModule({
	declarations: [...libraryComponents],
	imports: [BrowserModule],
	exports: [...libraryComponents]
})
export class AngularFoundationModule {}
