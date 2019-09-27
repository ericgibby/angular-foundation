import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	basicMenu = `<af-menu
	[items]="[{ href: '/menu', text: 'Menu Text', onClick: (event, href) => { event.preventDefault(); alert(href); } }]"
></af-menu>`;

	basicMenuItems = [
		{
			href: '/menu',
			text: 'Menu Text',
			onClick: (event, href) => {
				event.preventDefault();
				alert(href);
			}
		}
	];

	constructor() {}

	ngOnInit() {}
}
