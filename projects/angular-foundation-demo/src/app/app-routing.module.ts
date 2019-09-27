import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './views/menu/menu.component';
import { TableComponent } from './views/table/table.component';

const routes: Routes = [{ path: 'table', component: TableComponent }, { path: 'menu', component: MenuComponent }];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
