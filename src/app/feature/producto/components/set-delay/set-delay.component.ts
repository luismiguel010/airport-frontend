import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '@producto/shared/service/producto.service';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 1;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 24;

@Component({
  selector: 'app-set-delay',
  templateUrl: './set-delay.component.html',
  styleUrls: ['./set-delay.component.css']
})
export class SetDelayComponent implements OnInit {
  setDelayForm: FormGroup;
  horas: Int32Array;

  constructor(protected productoServices: ProductoService) { }

  ngOnInit(): void {
    this.construirFormularioSetDelay();
  }

  setdelay(){
    this.productoServices.setdelay(this.setDelayForm.value)
    .subscribe(response => {
      console.log(response);
    }, err => {
      console.error(err);
    })
  }

  private construirFormularioSetDelay() {
    this.setDelayForm = new FormGroup({
      horas: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
      Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)])
    });
  }

}
