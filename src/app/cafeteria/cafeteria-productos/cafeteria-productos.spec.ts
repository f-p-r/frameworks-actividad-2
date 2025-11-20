import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeteriaProductos } from './cafeteria-productos';

describe('CafeteriaProductos', () => {
  let component: CafeteriaProductos;
  let fixture: ComponentFixture<CafeteriaProductos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeteriaProductos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafeteriaProductos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
