import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from '../appServices/security/security.service';
import { end } from '@popperjs/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class IsCandidateGuard implements CanActivate {

  isCandidate:boolean=false;
  constructor( private router: Router, private authService: SecurityService,private _snackBar: MatSnackBar) {

    this.authService.isCandidateLogin.subscribe(value => {
      this.isCandidate = value;
    });
  }

  canActivate(): boolean {
    if (!this.isCandidate) {
      this._snackBar.open("Please Login as an Candidate To Access Candidate Dashboard", 'Close', { horizontalPosition: end,duration: 3000 });
      this.router.navigate(['/job']);
      return false;
    }
    return true;
  }

}
