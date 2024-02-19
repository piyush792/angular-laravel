import { Injectable, inject } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {TokenService} from './token.service'
@Injectable({
  providedIn: 'root'
})
export class BeforeLoginService implements CanActivate{

  router: Router = inject(Router);
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    // return !this.token.loggedIn();

    console.log("chk1: ", this.token.loggedIn());
    if(this.token.loggedIn()==false){      
      return true;
    }else{      
      return false;
    }

  }
  constructor(private token: TokenService) { }
}
