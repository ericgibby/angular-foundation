import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
	selector: 'af-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	@Input() items: MenuItem[];

	constructor() {}

	ngOnInit() {}

	handleClick(event: Event, listener?: EventListener) {
		if (listener) {
			listener(event);
		}
	}
}
