import { Component, Input, OnInit } from '@angular/core';
import { GridColumn } from './grid-column';

@Component({
	selector: 'af-grid',
	templateUrl: './grid.component.html',
	styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
	@Input() columns: GridColumn[];
	@Input() data: any[];

	constructor() {}

	ngOnInit() {}
}
