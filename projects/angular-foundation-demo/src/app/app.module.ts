import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFoundationModule } from '../../../angular-foundation/src/lib/angular-foundation.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './views/table/table.component';
import { MenuComponent } from './views/menu/menu.component';

@NgModule({
	declarations: [AppComponent, TableComponent, MenuComponent],
	imports: [BrowserModule, AppRoutingModule, AngularFoundationModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
