import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { StatefulComponent } from '../stateful-component';
import { StatefulInput } from '../stateful-input.decorator';
import { TableColumn } from './table-column';

class TableState {
	columns: TableColumn[];
	data: any[];
}

@Component({
	selector: 'af-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent extends StatefulComponent<TableState> {
	@StatefulInput<TableState>() @Input() columns: TableColumn[] | string;
	@StatefulInput<TableState>() @Input() data: any[] | string;

	constructor(protected cd: ChangeDetectorRef) {
		super(cd);
	}
}
