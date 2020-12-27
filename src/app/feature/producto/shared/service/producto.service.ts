import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Delay } from '../model/delay';
import { Producto } from '../model/producto';


@Injectable()
export class ProductoService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<any[]>(`${environment.endpoint}/getAll`, this.http.optsName('consultar productos'));
  }

  public guardar(producto: Producto) {
    return this.http.doPost<Producto, boolean>(`${environment.endpoint}/create`, producto,
                                                this.http.optsName('crear productos'));
  }

  public actualizar(producto: Producto){
    return this.http.doUpdate<Producto, boolean>(`${environment.endpoint}/update`, producto,
                                                  this.http.optsName('actualizar producto'));
  }

  public setdelay(delay: Delay){
    console.log(delay.horas);
    return this.http.doSetDelay<boolean>(`${environment.endpoint}/setDelay/${delay.horas}`,
                                          this.http.optsName('eliminar productos'));
  }

  public eliminar(producto: Producto) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/delete/${producto.id}`,
                                                 this.http.optsName('eliminar productos'));
  }
}
