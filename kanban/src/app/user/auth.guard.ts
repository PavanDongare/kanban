import { SnackService } from './../services/snack.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private afAuth : AngularFireAuth, private snack: SnackService ){}

  /*
    why snack in gaurd?
    every path it tries, if failed , show snack and navigate to home
  */

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean>  {

      const user = await this.afAuth.currentUser;
      const isLoggedIn = !!user; // user is null or object. !! makes it boolean

      if(!isLoggedIn) {
          this.snack.authErrorBox();
      }

      return isLoggedIn;
  }

}




// function which returns boolean or obeservable or promise of an observable
