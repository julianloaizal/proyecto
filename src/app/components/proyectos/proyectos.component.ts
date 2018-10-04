import { Component, OnInit } from '@angular/core';
import { ProyectService, Proyect } from '../../service/proyect.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html'
})
export class ProyectosComponent implements OnInit {
  proyect: any = [];
  constructor( private _proyectService: ProyectService ) {
    console.log( "lo que yo quiera" );
  }

  ngOnInit() {
    console.log( "lo otro que yo quiera" );
    this.proyect = this._proyectService.getProyect();
    console.log(this.proyect);
  }

}

