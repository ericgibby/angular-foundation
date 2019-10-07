import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { StatefulComponent, StatefulInputType } from '../stateful-component';
import { StatefulInput } from '../stateful-input.decorator';
import { MenuItem } from './menu-item';

@Component({
	selector: 'af-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent extends StatefulComponent implements OnChanges {
	@StatefulInput(StatefulInputType.Object) @Input() items: MenuItem[] | string;

	constructor(protected cd: ChangeDetectorRef) {
		super(cd);
	}

	handleClick(event: Event, item: MenuItem) {
		const { href, onClick } = item;
		if (onClick) {
			onClick(event, href);
		}
	}

	ngOnChanges(changes: SimpleChanges) {
		const hadItems = !!this.state.hasItems;
		super.ngOnChanges(changes);
		if (hadItems !== !!this.state.items) {
			this.setState({ hasItems: !!this.state.items });
		}
	}
}
