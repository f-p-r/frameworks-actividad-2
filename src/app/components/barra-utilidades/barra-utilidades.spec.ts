import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraUtilidades } from './barra-utilidades';

describe('BarraUtilidades', () => {
  let component: BarraUtilidades;
  let fixture: ComponentFixture<BarraUtilidades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraUtilidades]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraUtilidades);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
