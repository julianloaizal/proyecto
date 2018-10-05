import {Injectable} from '@angular/core';
import { Proyect } from '../components/proyectos/proyect';
import { ApiService } from '../api.service.config';


@Injectable()
export class ProyectService {
    private proyectUrl = ApiService.API_URL;  //Url APi 
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
    constructor () {
        console.log( " sericios proyecto " );
    }
    getProyect() {
        return this.proyect;
    }
}

export interface Proyect {
    name: String;
    type: String;
    modality: String;
    responsable: String;
    adviser: String;
    participants: String[];
    creationdate: Date;
    initialdate: Date;
    finaldate: Date;
    qualification: Number;
    state: String;
    deliverables: Number;
    generalpurpose: String;
    specificobjectives: String;
    recognitions: String;
    porcentage: String;
}
