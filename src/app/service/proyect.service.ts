import {Injectable} from '@angular/core';
import { Proyect } from '../components/proyectos/proyect';
import { ApiService } from '../api.service.config';

import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProyectService {
    private proyectUrl = ApiService.API_URL;  //Url APi 
    
    constructor(
        private http: HttpClient) { }
    
    
    private proyect: any = [
    {
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
        recognitions: 'Ninguna',
        percentage: '45'
    },
   {
        name: 'Proyecto de ciencias sociales',
        type: 'Proyecto de artu',
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
        recognitions: 'Ninguna',
        percentage: '45'
    },
     {
        name: 'Proyecto de medio naturales',
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
          recognitions: 'Ninguna',
          percentage: '45'
        },
        {
            name: 'Proyecto de medio nada',
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
            recognitions: 'Ninguna',
            percentage: '45'
        }
    ];
    
    getProyect(): Observable<Proyect[]> {
        const url = `${this.proyectUrl}/listar`;
        return  this.http.get<Proyect[]>(url);             
    }
    
    
}

export interface Proyect {
    radicado: number;
    nombre: string;
    tipo: number;
    id_programa: number;
    asesor: number;
    responsable: number;
    fecha_creacion: string;
    fecha_inicio: string;
    fecha_fin: string;
    calificacion: string;
    objetivo_general: string;
    id_estado: string;
}
