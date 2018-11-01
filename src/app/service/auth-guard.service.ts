import { Injectable } from '@angular/core';
import { ApiService } from '../api.service.config';
import { AuthService } from './auth.service';
import { Router,
        ActivatedRouteSnapshot,
        RouterStateSnapshot,
        CanActivate } from '@angular/router';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor( private auth: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.isAuthenticated) {
      return true;
    } else {
      return false;
    }
  }
}
