import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacProjectsComponent } from './pac-projects.component';

describe('PacProjectsComponent', () => {
  let component: PacProjectsComponent;
  let fixture: ComponentFixture<PacProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
