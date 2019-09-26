import { TestBed } from '@angular/core/testing';

import { AngularFoundationService } from './angular-foundation.service';

describe('AngularFoundationService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: AngularFoundationService = TestBed.get(AngularFoundationService);
		expect(service).toBeTruthy();
	});
});
