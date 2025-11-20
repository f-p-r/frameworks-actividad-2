import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLibro } from './modal-libro';

describe('ModalLibro', () => {
  let component: ModalLibro;
  let fixture: ComponentFixture<ModalLibro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalLibro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalLibro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
