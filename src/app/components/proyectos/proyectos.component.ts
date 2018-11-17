import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProyectService, Proyect } from '../../service/proyect.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html'
})
export class ProyectosComponent implements OnInit {
  proyect: Proyect[];
  constructor( private _proyectService: ProyectService,
                private router: Router) {
    console.log( );
  }
  ngOnInit() {
    this._proyectService.getProyect().subscribe(data => {
      console.log( data);
      this.proyect = data;
    });
    console.log(this.proyect);
  }

  getProyectId(id: number): void {
    this._proyectService.getHProyectoId(id)
    .subscribe( proyecto => this.proyect = proyecto);
  }

  delete(radicado: number): void {
    console.log(radicado);
    this._proyectService.delete(radicado)
      .subscribe(
        json => {
          this.router.navigate(['/proyectos']);
        }
      );
  }
  rerefresh() {
    location.reload(true);
  }
}
