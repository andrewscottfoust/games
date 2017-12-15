import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacProjectComponent } from './pac-project.component';

describe('PacProjectComponent', () => {
  let component: PacProjectComponent;
  let fixture: ComponentFixture<PacProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
