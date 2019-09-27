import { Component, Input, OnInit } from '@angular/core';
import { TableColumn } from './table-column';

@Component({
	selector: 'af-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
	@Input() columns: TableColumn[];
	@Input() data: any[];

	constructor() {}

	ngOnInit() {}
}
