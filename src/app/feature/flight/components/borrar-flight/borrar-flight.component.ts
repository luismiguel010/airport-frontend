import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FlightService } from 'src/app/feature/flight/shared/service/flight.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-borrar-flight',
  templateUrl: './borrar-flight.component.html',
  styleUrls: ['./borrar-flight.component.css']
})
export class BorrarFlightComponent implements OnInit {
  deleteForm: FormGroup;

  constructor(protected flightServices: FlightService) { }

  ngOnInit() {
    this.construirFormularioEliminar();
  }

  eliminar(){
    console.log(this.deleteForm.value)
    this.flightServices.eliminar(this.deleteForm.value)
    .subscribe(response => {
      console.log(response);
      swal('Vuelo eliminado con éxito', `El vuelo fue eliminado con éxito`, 'success')
    }, err => {
      console.error(err);
      swal('Error eliminando el vuelo', `${err.error.mensaje}`, 'error')
    })
  }

  private construirFormularioEliminar() {
    this.deleteForm = new FormGroup({
      id: new FormControl('', [Validators.required])});
  }

}
