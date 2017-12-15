import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacNewProjectFormComponent } from './pac-new-project-form.component';

describe('PacNewProjectFormComponent', () => {
  let component: PacNewProjectFormComponent;
  let fixture: ComponentFixture<PacNewProjectFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacNewProjectFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacNewProjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
