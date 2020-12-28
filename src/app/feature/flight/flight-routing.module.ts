import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearFlightComponent } from './components/crear-flight/crear-flight.component';
import { ListarFlightComponent } from './components/listar-flight/listar-flight.component';
import { BorrarFlightComponent } from './components/borrar-flight/borrar-flight.component';
import { FlightComponent } from './components/flight/flight.component';
import { ActualizarFlightComponent } from './components/actualizar-flight/actualizar-flight.component';
import { SetDelayComponent } from './components/set-delay/set-delay.component';


const routes: Routes = [
  {
    path: '',
    component: FlightComponent,
    children: [
      {
        path: 'crear',
        component: CrearFlightComponent
      },
      {
        path: 'listar',
        component: ListarFlightComponent
      },
      {
        path: 'borrar',
        component: BorrarFlightComponent
      },
      {
        path: 'actualizar',
        component: ActualizarFlightComponent
      },
      {
        path: 'setdelay',
        component: SetDelayComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }
