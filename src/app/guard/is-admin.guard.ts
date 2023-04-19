import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from '../appServices/security.service';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {
  /**
   *
   */
  constructor(private checkAdmin:SecurityService, private router:Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.checkAdmin.getRole() === "admin"){
        return true;
      }

      this.router.navigate(['/home']);
    return false;
  }

}
