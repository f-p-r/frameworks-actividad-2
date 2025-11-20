import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeteriaLayout } from './cafeteria-layout';

describe('CafeteriaLayout', () => {
  let component: CafeteriaLayout;
  let fixture: ComponentFixture<CafeteriaLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeteriaLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafeteriaLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
