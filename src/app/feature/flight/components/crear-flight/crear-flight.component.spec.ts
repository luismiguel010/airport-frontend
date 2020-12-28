import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CrearFlightComponent } from './crear-flight.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FlightService } from '../../shared/service/flight.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CrearFlightComponent', () => {
  let component: CrearFlightComponent;
  let fixture: ComponentFixture<CrearFlightComponent>;
  let flightService: FlightService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearFlightComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [FlightService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFlightComponent);
    component = fixture.componentInstance;
    flightService = TestBed.inject(FlightService);
    spyOn(flightService, 'guardar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.flightForm.valid).toBeFalsy();
  });

  it('Registrando producto', () => {
    expect(component.flightForm.valid).toBeFalsy();
    component.flightForm.controls.id.setValue('001');
    component.flightForm.controls.descripcion.setValue('Producto test');
    expect(component.flightForm.valid).toBeTruthy();

    component.crear();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});
