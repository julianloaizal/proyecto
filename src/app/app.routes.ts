import {RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { GestionproyectoComponent } from './components/gestionproyecto/gestionproyecto.component';
import { AuthGuardService} from './service/auth-guard.service';
import { LoginComponent } from './components/login/login.component';
import { ActualizarComponent } from './components/gestionproyecto/actualizar/actualizar.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'proyectos', component: ProyectosComponent},
    { path: 'login', component: LoginComponent},
    {   path: 'gestionproyecto',
        component: GestionproyectoComponent,
        canActivate: [ AuthGuardService ]
    },
    { path: 'actualizar', component: ActualizarComponent},
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
