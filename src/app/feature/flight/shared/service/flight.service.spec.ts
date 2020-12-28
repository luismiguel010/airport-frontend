import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FlightService } from './flight.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Flight } from '../model/flight';
import { HttpResponse } from '@angular/common/http';

describe('FlightService', () => {
  let httpMock: HttpTestingController;
  let service: FlightService;
  const apiEndpointFlightConsulta = `${environment.endpoint}/getAll`;
  const apiEndpointFlight = `${environment.endpoint}/create`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlightService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(FlightService);
  });

  it('should be created', () => {
    const productService: FlightService = TestBed.inject(FlightService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar flights', () => {
    const dummyFlights = [
      new Flight('1', 'Flight 1'), new Flight('2', 'Flight 2')
    ];
    service.consultar().subscribe(flights => {
      expect(flights.length).toBe(2);
      expect(flights).toEqual(dummyFlights);
    });
    const req = httpMock.expectOne(apiEndpointFlightConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyFlights);
  });

  it('deberia crear un flight', () => {
    const dummyFlight = new Flight('1', 'Flight 1');
    service.guardar(dummyFlight).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointFlight);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un producto', () => {
    const dummyFlight = new Flight('1', 'Flight 1');
    service.eliminar(dummyFlight).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointFlight}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
