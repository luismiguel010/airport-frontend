import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDelayComponent } from './set-delay.component';

describe('SetDelayComponent', () => {
  let component: SetDelayComponent;
  let fixture: ComponentFixture<SetDelayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetDelayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
