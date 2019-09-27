import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
	columns = [
		{ key: 'firstName', title: 'First Name' },
		{ key: 'lastName', title: 'Last Name' },
		{ key: 'email', title: 'Email' }
	];
	data = [
		{ firstName: 'Tony', lastName: 'Stark', email: 'ironman@avenge.rs' },
		{ firstName: 'Steve', lastName: 'Rogers', email: 'cap@avenge.rs' }
	];

	codeSnippet = `this.columns: GridColumn[] = [
	{ key: 'firstName', title: 'First Name' },
	{ key: 'lastName', title: 'Last Name' },
	{ key: 'email', title: 'Email' }
];

this.data: any[] = [
	{ firstName: 'Tony', lastName: 'Stark', email: 'ironman@avenge.rs' },
	{ firstName: 'Steve', lastName: 'Rogers', email: 'cap@avenge.rs' }
];`;
	htmlSnippet = `<af-grid [columns]="columns" [data]="data"></af-grid>`;

	constructor() {}

	ngOnInit() {}
}
