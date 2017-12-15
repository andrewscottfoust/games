import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelartcreatorComponent } from './pixelartcreator.component';

describe('PixelartcreatorComponent', () => {
  let component: PixelartcreatorComponent;
  let fixture: ComponentFixture<PixelartcreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixelartcreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixelartcreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
