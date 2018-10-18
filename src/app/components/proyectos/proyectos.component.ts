import { Component, OnInit } from '@angular/core';
import { ProyectService } from '../../service/proyect.service';
//import {Proyect} from './proyect';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html'
})
export class ProyectosComponent implements OnInit {
 // proyect: Proyect[];
  //constructor( private _proyectService: ProyectService ) {
    //console.log( "lo que yo quiera" );
  //}
    proyectos: any[] = [];
    constructor(private _pService: ProyectService) {
        console.log("listo para usar");
    }

  /**ngOnInit() {
    this._proyectService.getProyect().subscribe(data=>{
      console.log( data);
      this.proyect = data;
    });
    console.log(this.proyect);
  }*/
  ngOnInit() {
    this.proyectos = this._pService.getProyect();
    console.log(this.proyectos);
  }
}

