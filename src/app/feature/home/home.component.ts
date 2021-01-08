import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { MeteorologyService } from '../meteorology/shared/services/meteorology.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  urlMeteorology: string = "https://meteorologyadnceiba.azurewebsites.net/blob";
  private fileSelected: File;
  

  constructor(protected meteorologyService: MeteorologyService) { }

  ngOnInit() { }

  selectFile(event){
    this.fileSelected = event.target.files[0];
    console.log(this.fileSelected);
  }

  uploadFile(){
    this.meteorologyService.uploadBlobMeteorology(this.fileSelected).subscribe
    (response => {
      this.refresh();
      console.log(response);
    }, err => {
      console.error(err);
      swal('Error cargando el archivo', 'error')
    }
    );
  }

  refresh(): void {
    window.location.reload();
  }
}
