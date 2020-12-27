import { NgModule } from '@angular/core';

import { ProductoRoutingModule } from './producto-routing.module';
import { BorrarProductoComponent } from './components/borrar-producto/borrar-producto.component';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ProductoComponent } from './components/producto/producto.component';
import { SharedModule } from '@shared/shared.module';
import { ProductoService } from './shared/service/producto.service';
import { ActualizarProductoComponent } from './components/actualizar-producto/actualizar-producto.component';
import { SetDelayComponent } from './components/set-delay/set-delay.component';


@NgModule({
  declarations: [
    CrearProductoComponent,
    ListarProductoComponent,
    BorrarProductoComponent,
    ProductoComponent,
    ActualizarProductoComponent,
    SetDelayComponent
  ],
  imports: [
    ProductoRoutingModule,
    SharedModule
  ],
  providers: [ProductoService]
})
export class ProductoModule { }
