import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFoundationComponent } from './angular-foundation.component';

describe('AngularFoundationComponent', () => {
	let component: AngularFoundationComponent;
	let fixture: ComponentFixture<AngularFoundationComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AngularFoundationComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AngularFoundationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
