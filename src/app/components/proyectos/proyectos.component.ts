import { Component, OnInit } from '@angular/core';
import { ProyectService } from '../../service/proyect.service';
import {Proyect} from './proyect';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html'
})
export class ProyectosComponent implements OnInit {
  proyect: Proyect[];
  constructor( private _proyectService: ProyectService ) {
    console.log( );
  }
  ngOnInit() {
    this._proyectService.getProyect().subscribe(data => {
      console.log( data);
      this.proyect = data;
    });
    console.log(this.proyect);
  }
}

