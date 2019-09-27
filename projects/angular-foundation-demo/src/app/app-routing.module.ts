import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './views/menu/menu.component';
import { GridComponent } from './views/grid/grid.component';

const routes: Routes = [{ path: 'grid', component: GridComponent }, { path: 'menu', component: MenuComponent }];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
