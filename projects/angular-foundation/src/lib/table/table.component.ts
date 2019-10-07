import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { StatefulComponent, StatefulInputType } from '../stateful-component';
import { StatefulInput } from '../stateful-input.decorator';
import { TableColumn } from './table-column';

@Component({
	selector: 'af-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent extends StatefulComponent {
	@StatefulInput(StatefulInputType.Object) @Input() columns: TableColumn[] | string;
	@StatefulInput(StatefulInputType.Object) @Input() data: any[] | string;

	constructor(protected cd: ChangeDetectorRef) {
		super(cd);
	}
}
