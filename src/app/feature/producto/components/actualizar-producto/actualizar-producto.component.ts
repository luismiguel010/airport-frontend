import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../shared/service/producto.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {

  productoForm: FormGroup;

  constructor(protected productoServices: ProductoService) { }

  ngOnInit() {
    this.construirFormularioProducto();
  }

  actualizar(){
    this.productoServices.actualizar(this.productoForm.value)
    .subscribe(response => {
      console.log(response);
      swal('Vuelo actualizado con éxito', `El vuelo fue actualizado.`, 'success')
    }, err => {
      console.error(err);
      swal('Error actualizando el vuelo', `${err.error.mensaje}`, 'error')
    })
  }

  private construirFormularioProducto() {
    this.productoForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      timeDeparture: new FormControl('', [Validators.required]),
      arrival: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                                             Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      cost: new FormControl('', [Validators.required])
    });
  }

}
