import { Component, OnInit } from '@angular/core';
import { Proyect } from './proyect';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html'
})
export class ProyectosComponent implements OnInit {
  proyect: Proyect = {
    name: 'Proyecto de medio ambiente',
      type: 'Proyecto de grado',
      modality: 'Pregrado',
      responsable: 'Alvaro Nuñez',
      adviser: 'Rodolfo Andres',
      participants: ['Andres Jeronimo'],
      creationdate: '2018-09-23',
      initialdate: '2018-09-25',
      finaldate: '2018-10-23',
      qualification: 3.5,
      state: 'Pendiente',
      deliverables: 1,
      generalpurpose: 'Terminar el trabajo de grado para poder trabajar',
      specificobjectives: 'Muchos, luego los vemos',
      recognitions: 'Ninguna'
    };
  constructor() { }

  ngOnInit() {
  }

}

