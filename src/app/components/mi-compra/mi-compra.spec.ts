import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiCompra } from './mi-compra';

describe('MiCompra', () => {
  let component: MiCompra;
  let fixture: ComponentFixture<MiCompra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiCompra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiCompra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
