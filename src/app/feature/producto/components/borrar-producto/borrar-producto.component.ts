import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '@producto/shared/service/producto.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-borrar-producto',
  templateUrl: './borrar-producto.component.html',
  styleUrls: ['./borrar-producto.component.css']
})
export class BorrarProductoComponent implements OnInit {
  deleteForm: FormGroup;

  constructor(protected productoServices: ProductoService) { }

  ngOnInit() {
    this.construirFormularioEliminar();
  }

  eliminar(){
    console.log(this.deleteForm.value)
    this.productoServices.eliminar(this.deleteForm.value)
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
