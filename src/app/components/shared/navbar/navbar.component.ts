import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor( private auth: AuthService ) {
    auth.handleAuthentication();
  }

  login() {
    this.auth.login();
  }
  salir() {
    this.auth.logout();
  }

}
