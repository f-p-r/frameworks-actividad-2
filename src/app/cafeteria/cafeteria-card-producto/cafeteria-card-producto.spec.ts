import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeteriaCardProducto } from './cafeteria-card-producto';

describe('CafeteriaCardProducto', () => {
  let component: CafeteriaCardProducto;
  let fixture: ComponentFixture<CafeteriaCardProducto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeteriaCardProducto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafeteriaCardProducto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
