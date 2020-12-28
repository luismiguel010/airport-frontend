import { NgModule } from '@angular/core';

import { FlightRoutingModule } from './flight-routing.module';
import { BorrarFlightComponent } from './components/borrar-flight/borrar-flight.component';
import { ListarFlightComponent } from './components/listar-flight/listar-flight.component';
import { CrearFlightComponent } from './components/crear-flight/crear-flight.component';
import { FlightComponent } from './components/flight/flight.component';
import { SharedModule } from '@shared/shared.module';
import { FlightService } from './shared/service/flight.service';
import { ActualizarFlightComponent } from './components/actualizar-flight/actualizar-flight.component';
import { SetDelayComponent } from './components/set-delay/set-delay.component';


@NgModule({
  declarations: [
    CrearFlightComponent,
    ListarFlightComponent,
    BorrarFlightComponent,
    FlightComponent,
    ActualizarFlightComponent,
    SetDelayComponent
  ],
  imports: [
    FlightRoutingModule,
    SharedModule
  ],
  providers: [FlightService]
})
export class ProductoModule { }
