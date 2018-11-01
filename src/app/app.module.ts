import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { ProyectService } from './service/proyect.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-guard.service';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { GestionproyectoComponent } from './components/gestionproyecto/gestionproyecto.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    GestionproyectoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    ProyectService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
