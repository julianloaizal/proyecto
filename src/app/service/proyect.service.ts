import {Injectable} from '@angular/core';
import { Proyect } from '../components/proyectos/proyect';
import { ApiService } from '../api.service.config';

import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import swal from 'sweetalert2';


@Injectable()
export class ProyectService {

    private proyectUrl = ApiService.API_URL;

    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    constructor(
        private http: HttpClient) { }
    private proyects: any = [
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
    getProyects() {
        const url = `${this.proyectUrl}/buscar/1`;
        return  this.http.get<Proyect>(url);
    }

    crear(proyect: Proyect[]): Observable<Proyect[]> {
        return this.http.post(this.proyectUrl, proyect, { headers: this.httpHeaders })
      .pipe(
        map((response: any) => response.proyect as Proyect[]),
        catchError(e => {

          if (e.status === 400) {
            return throwError(e);
          }

          console.error(e.error.mensaje);
          swal(e.error.mensaje, e.error.error, 'error');
          return throwError(e);
        })
      );
      }
      update(proyect: Proyect[]): Observable<any> {
        return this.http.put<any>(`${this.proyectUrl}/${proyect.radicado}`, proyect, { headers: this.httpHeaders }).pipe(
          catchError(e => {

            if (e.status === 400) {
              return throwError(e);
            }

            console.error(e.error.mensaje);
            swal(e.error.mensaje, e.error.error, 'error');
            return throwError(e);
          })
        );
      }

      delete(radicado: number): Observable<Proyect[]> {
        return this.http.delete<Proyect[]>(`${this.proyectUrl}/${radicado}`, { headers: this.httpHeaders }).pipe(
          catchError(e => {
            console.error(e.error.mensaje);
            swal(e.error.mensaje, e.error.error, 'error');
            return throwError(e);
          })
        );
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
