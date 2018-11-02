import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestionproyecto',
  templateUrl: './gestionproyecto.component.html',
  styleUrls: ['./gestionproyecto.component.css']
})
export class GestionproyectoComponent implements OnInit {

  forma: FormGroup;
  constructor() {
    this.forma = new FormGroup({
      'nombre': new FormControl( '', Validators.required ),
      'tipo': new FormControl( '', Validators.required ),
      'programa': new FormControl( '', Validators.required ),
      'asesor': new FormControl( '', Validators.required ),
      'responsable': new FormControl( '', Validators.required ),
      'creacion': new FormControl( '', Validators.required ),
      'inicio': new FormControl( '', Validators.required ),
      'fin': new FormControl( '', Validators.required ),
      'calificacion': new FormControl( '', Validators.required ),
      'objetivo': new FormControl( '', Validators.required ),
      'estado': new FormControl( '', Validators.required )
    });
   }

   guardarCambios() {
       console.log(this.forma.value);
   }

  ngOnInit() {
  }

}
