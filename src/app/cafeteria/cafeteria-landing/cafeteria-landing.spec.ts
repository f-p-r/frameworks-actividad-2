import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeteriaLanding } from './cafeteria-landing';

describe('CafeteriaLanding', () => {
  let component: CafeteriaLanding;
  let fixture: ComponentFixture<CafeteriaLanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeteriaLanding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafeteriaLanding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
