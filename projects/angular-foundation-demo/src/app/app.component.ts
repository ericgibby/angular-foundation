import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../../../angular-foundation/src/lib/menu/menu-item';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	items: MenuItem[];

	constructor(private router: Router) {}

	handleClick(event: Event, href: string) {
		event.preventDefault();
		event.stopPropagation();

		this.router.navigateByUrl(href);
	}

	ngOnInit() {
		this.items = [{ href: '/', text: 'Home', onClick: this.handleClick.bind(this) }];
	}
}
