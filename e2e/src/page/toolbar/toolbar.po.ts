import { by, element } from 'protractor';

export class ToolbarPage {

    private linkHome = element(by.id('linkHome'));
    private linkCrearFlight = element(by.id('linkCrearFlight'));
    private linkListarFlight = element(by.id('linkListarFlight'));
    private linkActualizarFlight = element(by.id('linkActualizarFlight'));
    private linkSetDelayFlight = element(by.id('linkSetDelayFlight'));
    private linkEliminarFlight = element(by.id('linkEliminarFlight'));

    async clickBotonHome() {
        await this.linkHome.click();
    }

    async clickBotonCrearFlight() {
        await this.linkCrearFlight.click();
    }

    async clickBotonListarFlight() {
        await this.linkListarFlight.click();
    }

    async clickBotonActualizarFlight(){
        await this.linkActualizarFlight.click();
    }

    async clickBotonSetDelayFlight(){
        await this.linkSetDelayFlight.click();
    }

    async clickBotonEliminarFlight(){
        await this.linkEliminarFlight.click();
    }
}
