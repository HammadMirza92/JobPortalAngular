import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from '../appServices/security/security.service';

@Injectable({
  providedIn: 'root'
})

export class IsAdminGuard implements CanActivate {
  constructor(   private router: Router, private authService: SecurityService) {}

  canActivate(): boolean {
    if (!this.authService.isAuthenticated) {
      this.router.navigate(['/logout']);
      return false;
    }
    return true;
  }
}

