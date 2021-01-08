import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteorologyService {

  urlMeteorology: string = "https://meteorologyadnceiba.azurewebsites.net/blob";

  constructor(protected http: HttpClient) { }

  uploadBlobMeteorology(file: File) {
    let formData = new FormData();
    formData.append("data", file);
    return this.http.post(this.urlMeteorology, formData);
  }
}
