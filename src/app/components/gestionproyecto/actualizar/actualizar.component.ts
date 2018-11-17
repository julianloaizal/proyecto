import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Proyect } from '../../proyectos/proyect';
import { ProyectService } from '../../../service/proyect.service';


@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {
   proyect: Proyect[];
  constructor(private proyectService: ProyectService,
              private router: Router ) {
   }

  ngOnInit() {
  }
  update(): void {
    console.log(this.proyect);
    this.proyectService.update(this.proyect)
      .subscribe(
        json => {
          this.router.navigate(['/actualizar']);
        }
      );
  }
}
