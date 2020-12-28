import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../shared/service/producto.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;
  idFligh: any;
  constructor(protected productoServices: ProductoService) { }

  ngOnInit() {
    this.construirFormularioProducto();
  }

  crear() {
    this.productoServices.guardar(this.productoForm.value)
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

  private construirFormularioProducto() {
    this.productoForm = new FormGroup({
      timeDeparture: new FormControl('', [Validators.required]),
      arrival: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                                             Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      cost: new FormControl('', [Validators.required])
    });
  }

}
