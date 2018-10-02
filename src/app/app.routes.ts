import {RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
