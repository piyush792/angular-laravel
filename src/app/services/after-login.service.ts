import { Injectable, inject } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {TokenService} from './token.service'

@Injectable({
  providedIn: 'root'
})
export class AfterLoginService implements CanActivate{

  router: Router = inject(Router);
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {

    console.log("chk2: ", this.token.loggedIn());
    if(this.token.loggedIn()==true){
      return true;
    }else{
      this.router.navigate(['/login'])
      return false;
    }

  }

  constructor(private token: TokenService) { }
}
