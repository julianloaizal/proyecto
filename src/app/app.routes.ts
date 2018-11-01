import {RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { GestionproyectoComponent } from './components/gestionproyecto/gestionproyecto.component';
import { AuthGuardService} from './service/auth-guard.service';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'proyectos', component: ProyectosComponent},
    {   path: 'gestionproyecto',
        component: GestionproyectoComponent,
        canActivate: [ AuthGuardService ]
    },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
