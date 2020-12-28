import { Component, OnInit } from '@angular/core';

import { FlightService } from 'src/app/feature/flight/shared/service/flight.service';

@Component({
  selector: 'app-listar-flight',
  templateUrl: './listar-flight.component.html',
  styleUrls: ['./listar-flight.component.css']
})
export class ListarFlightComponent implements OnInit {
  public listaFlights: any[] = [];

  constructor(protected flightService: FlightService) { }

  ngOnInit() {
    this.flightService.consultar()
    .subscribe(
      (listaProductos) => {
        this.listaFlights = listaProductos;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
