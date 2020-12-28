import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../shared/service/flight.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

@Component({
  selector: 'app-crear-flight',
  templateUrl: './crear-flight.component.html',
  styleUrls: ['./crear-flight.component.css']
})
export class CrearFlightComponent implements OnInit {
  flightForm: FormGroup;
  idFligh: any;
  constructor(protected flightServices: FlightService) { }

  ngOnInit() {
    this.construirFormularioFlight();
  }

  crear() {
    this.flightServices.guardar(this.flightForm.value)
    .subscribe(response => {
      this.idFligh = response;
        console.log(response);
        swal('Vuelo registrado con éxito', `El vuelo fue creado con el id ${this.idFligh.value}`, 'success')
      },
      (error) => {
        console.error(error.error.mensaje);
        swal('Error creando el vuelo', `${error.error.mensaje}`, 'error')
      }
    );
  }

  private construirFormularioFlight() {
    this.flightForm = new FormGroup({
      timeDeparture: new FormControl('', [Validators.required]),
      arrival: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                                             Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      cost: new FormControl('', [Validators.required])
    });
  }

}
