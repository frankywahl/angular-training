import {Injectable} from '@angular/core';
import {CanActivate, UrlTree, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {
  }

  canActivate(): Observable<boolean | UrlTree> {
    console.log('AuthGuard#canActivate called');
    return of(this.loginService.isUserLoggedIn() || this.router.parseUrl('login'));
  }

}
