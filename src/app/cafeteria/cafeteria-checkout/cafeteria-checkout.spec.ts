import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeteriaCheckout } from './cafeteria-checkout';

describe('CafeteriaCheckout', () => {
  let component: CafeteriaCheckout;
  let fixture: ComponentFixture<CafeteriaCheckout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeteriaCheckout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafeteriaCheckout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
