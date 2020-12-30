import { by, element } from 'protractor';

export class FlightPage {
    
    private linkCreate = element(by.id('buttonCreate'));
    private linkActualizar = element(by.id('buttonActualizar'));
    private linkReprogramarVuelos = element(by.id('buttonReprogramar'));
    private linkEliminar = element(by.id('buttonEliminar'));
    private inputIdFlight = element(by.id('id'));
    private inputTimeFlight = element(by.id('timeDeparture'));
    private inputDestinoFlight = element(by.id('arrival'));
    private inputCostoFlight = element(by.id('cost'));
    private listaFlight = element.all(by.css('tbody.flights tr'));
    private inputHorasCierre = element(by.id('horas'));

    async clickButtonCreate(){
        await this.linkCreate.click();
    }

    async clickButtonActualizar(){
        await this.linkActualizar.click();
    }

    async clickButtonReprogramar(){
        await this.linkReprogramarVuelos.click();
    }

    async clickButtonEliminar(){
        await this.linkEliminar.click();
    }

    async ingresarId(idFlight) {
        await this.inputIdFlight.sendKeys(idFlight);
    }

    async ingresarFechaHora(timeDeparture) {
        await this.inputTimeFlight.sendKeys(timeDeparture);
    }

    async ingresarDestino(arrival) {
        await this.inputDestinoFlight.sendKeys(arrival);
    }

    async ingresarCosto(cost) {
        await this.inputCostoFlight.sendKeys(cost);
    }

    async ingresarHorasDeCierre(horas){
        await this.inputHorasCierre.sendKeys(horas);
    }

    async contarFlights() {
        return this.listaFlight.count();
    }
}
