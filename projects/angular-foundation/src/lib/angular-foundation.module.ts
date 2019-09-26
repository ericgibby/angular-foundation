import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { BrowserModule } from '@angular/platform-browser';

const libraryComponents = [MenuComponent];

@NgModule({
	declarations: [...libraryComponents],
	imports: [BrowserModule],
	exports: [...libraryComponents]
})
export class AngularFoundationModule {}
