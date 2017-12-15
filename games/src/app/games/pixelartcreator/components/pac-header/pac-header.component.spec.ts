import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacHeaderComponent } from './pac-header.component';

describe('PacHeaderComponent', () => {
  let component: PacHeaderComponent;
  let fixture: ComponentFixture<PacHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
