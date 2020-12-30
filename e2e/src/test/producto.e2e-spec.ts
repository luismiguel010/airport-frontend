import { ToolbarPage } from '../page/toolbar/toolbar.po';
import { AppPage } from '../app.po';
import { FlightPage } from '../page/flight/flight.po';

describe('workspace-project Flight', () => {
    let page: AppPage;
    let toolbar: ToolbarPage;
    let flight: FlightPage;

    beforeEach(() => {
        page = new AppPage();
        toolbar = new ToolbarPage();
        flight = new FlightPage();
    });

    it('Debería crear flight', () => {
        const FECHA_DEL_VUELO = '2020-12-19T21:46:00';
        const DESTINO = 'Londres-Prueba';
        const COSTO = '181.3';
        page.navigateTo();
        toolbar.clickBotonCrearFlight();
        flight.ingresarFechaHora(FECHA_DEL_VUELO);
        flight.ingresarDestino(DESTINO);
        flight.ingresarCosto(COSTO);
        flight.clickButtonCreate();
    });

    it('Debería listar productos', () => {
        page.navigateTo();
        toolbar.clickBotonListarFlight();
        expect(12).toBe(flight.contarFlights());
    });

    it('Debería actualizar producto', () => {
        const ID_DEL_VUELO = 'Tokyo-1611512400';
        const FECHA_DEL_VUELO = '2020-12-19T21:46:00';
        const DESTINO = 'Londres-Prueba';
        const COSTO = '181.3';
        page.navigateTo();
        toolbar.clickBotonActualizarFlight();
        flight.ingresarId(ID_DEL_VUELO);
        flight.ingresarFechaHora(FECHA_DEL_VUELO);
        flight.ingresarDestino(DESTINO);
        flight.ingresarCosto(COSTO);
        flight.clickButtonActualizar();
        
    });

    it('Debería programar cierre aeropuerto', () => {
        const HORAS_DE_CIERRE = '2';
        page.navigateTo();
        toolbar.clickBotonSetDelayFlight();
        flight.ingresarHorasDeCierre(HORAS_DE_CIERRE);
        flight.clickButtonReprogramar();
    });

    it('Debería eliminar vuelo', () => {
        const ID_VUELO = 'Lima-1609174800';
        page.navigateTo();
        toolbar.clickBotonEliminarFlight();
        flight.ingresarId(ID_VUELO);
        flight.clickButtonEliminar();
    });


});
