import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Delay } from '../model/delay';
import { Flight } from '../model/flight';


@Injectable()
export class FlightService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<any[]>(`${environment.endpoint}/getAll`, this.http.optsName('consultar flights'));
  }

  public guardar(flight: Flight) {
    return this.http.doPost<Flight, boolean>(`${environment.endpoint}/create`, flight,
                                                this.http.optsName('crear flights'));
  }

  public actualizar(flight: Flight){
    return this.http.doUpdate<Flight, boolean>(`${environment.endpoint}/update`, flight,
                                                  this.http.optsName('actualizar flights'));
  }

  public setdelay(delay: Delay){
    console.log(delay.horas);
    return this.http.doSetDelay<boolean>(`${environment.endpoint}/setDelay/${delay.horas}`,
                                          this.http.optsName('actualizar flights'));
  }

  public eliminar(flight: Flight) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/delete/${flight.id}`,
                                                 this.http.optsName('eliminar flights'));
  }
}
