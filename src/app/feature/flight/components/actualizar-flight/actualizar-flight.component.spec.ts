import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarFlightComponent } from './actualizar-flight.component';

describe('ActualizarFlightComponent', () => {
  let component: ActualizarFlightComponent;
  let fixture: ComponentFixture<ActualizarFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
