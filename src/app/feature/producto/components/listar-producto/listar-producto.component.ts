import { Component, OnInit } from '@angular/core';

import { ProductoService } from '@producto/shared/service/producto.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {
  public listaProductos: any[] = [];

  constructor(protected productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.consultar()
    .subscribe(
      (listaProductos) => {
        this.listaProductos = listaProductos;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
