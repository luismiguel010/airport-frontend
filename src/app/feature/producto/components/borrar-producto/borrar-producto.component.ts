import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '@producto/shared/service/producto.service';

@Component({
  selector: 'app-borrar-producto',
  templateUrl: './borrar-producto.component.html',
  styleUrls: ['./borrar-producto.component.css']
})
export class BorrarProductoComponent implements OnInit {
  deleteForm: FormGroup;
  idFligh: string;
  isDelete: boolean = false;

  constructor(protected productoServices: ProductoService) { }

  ngOnInit() {
    this.construirFormularioEliminar();
  }

  eliminar(){
    console.log(this.deleteForm.value)
    this.productoServices.eliminar(this.deleteForm.value)
    .subscribe(response => {
      console.log(response.valueOf);
    }, err => {
      console.error(err);
    })
  }

  private construirFormularioEliminar() {
    this.deleteForm = new FormGroup({
      id: new FormControl('', [Validators.required])});
  }

}
