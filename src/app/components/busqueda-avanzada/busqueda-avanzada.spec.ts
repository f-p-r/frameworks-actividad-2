import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaAvanzada } from './busqueda-avanzada';

describe('BusquedaAvanzada', () => {
  let component: BusquedaAvanzada;
  let fixture: ComponentFixture<BusquedaAvanzada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusquedaAvanzada]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaAvanzada);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
