import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProyectService } from '../../service/proyect.service';
import { Proyect } from '../proyectos/proyect';


@Component({
  selector: 'app-gestionproyecto',
  templateUrl: './gestionproyecto.component.html',
  styleUrls: ['./gestionproyecto.component.css']
})
export class GestionproyectoComponent implements OnInit {

  private proyect: Proyect = new Proyect();

  constructor(private proyectService: ProyectService,
              private router: Router ) {
   }

  ngOnInit() {
  }
  create(): void {
    console.log(this.proyect);
    this.proyectService.crear(this.proyect)
      .subscribe(
        proyect => {
          this.router.navigate(['/proyectos']);
        }
      );
  }
}
