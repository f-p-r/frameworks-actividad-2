import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeteriaNavbar } from './cafeteria-navbar';

describe('CafeteriaNavbar', () => {
  let component: CafeteriaNavbar;
  let fixture: ComponentFixture<CafeteriaNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeteriaNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafeteriaNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
