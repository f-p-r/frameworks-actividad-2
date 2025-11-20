import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLibro } from './card-libro';

describe('CardLibro', () => {
  let component: CardLibro;
  let fixture: ComponentFixture<CardLibro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLibro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLibro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
