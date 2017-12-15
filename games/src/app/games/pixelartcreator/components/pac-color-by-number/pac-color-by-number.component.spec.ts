import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacColorByNumberComponent } from './pac-color-by-number.component';

describe('PacColorByNumberComponent', () => {
  let component: PacColorByNumberComponent;
  let fixture: ComponentFixture<PacColorByNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacColorByNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacColorByNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
