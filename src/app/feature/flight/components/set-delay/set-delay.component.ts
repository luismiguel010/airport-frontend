import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FlightService } from 'src/app/feature/flight/shared/service/flight.service';
import swal from 'sweetalert2';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 1;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 24;

@Component({
  selector: 'app-set-delay',
  templateUrl: './set-delay.component.html',
  styleUrls: ['./set-delay.component.css']
})
export class SetDelayComponent implements OnInit {
  setDelayForm: FormGroup;
  horas: Int32Array;

  constructor(protected flightService: FlightService) { }

  ngOnInit(): void {
    this.construirFormularioSetDelay();
  }

  setdelay(){
    this.flightService.setdelay(this.setDelayForm.value)
    .subscribe(response => {
      console.log(response);
      swal('Actualizados todos los vuelos con éxito', `Todos los vuelos se actualizaron deacuerdo al cierre programado del aeropuerto`, 'success')
    }, err => {
      console.error(err);
      swal('Error programando el cierre del aeropuerto', `${err.error.mensaje}`, 'error')

    })
  }

  private construirFormularioSetDelay() {
    this.setDelayForm = new FormGroup({
      horas: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
      Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)])
    });
  }

}
