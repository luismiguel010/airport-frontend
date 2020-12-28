import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../shared/service/flight.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

@Component({
  selector: 'app-actualizar-flight',
  templateUrl: './actualizar-flight.component.html',
  styleUrls: ['./actualizar-flight.component.css']
})
export class ActualizarFlightComponent implements OnInit {

  flightForm: FormGroup;

  constructor(protected flightServices: FlightService) { }

  ngOnInit() {
    this.construirFormularioFlight();
  }

  actualizar(){
    this.flightServices.actualizar(this.flightForm.value)
    .subscribe(response => {
      console.log(response);
      swal('Vuelo actualizado con éxito', `El vuelo fue actualizado.`, 'success')
    }, err => {
      console.error(err);
      swal('Error actualizando el vuelo', `${err.error.mensaje}`, 'error')
    })
  }

  private construirFormularioFlight() {
    this.flightForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      timeDeparture: new FormControl('', [Validators.required]),
      arrival: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                                             Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      cost: new FormControl('', [Validators.required])
    });
  }

}
