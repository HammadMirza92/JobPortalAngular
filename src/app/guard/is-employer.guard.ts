import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SecurityService } from '../appServices/security/security.service';
import { end } from '@popperjs/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class IsEmployerGuard implements CanActivate {
  isEmployer:boolean=false;
  constructor( private router: Router, private authService: SecurityService,private _snackBar: MatSnackBar) {

    this.authService.isCompanyLogin.subscribe(value => {
      this.isEmployer = value;
    });
  }

  canActivate(): boolean {
    if (!this.isEmployer) {
      this._snackBar.open("Please Login as an Employer To Access Employer Dashboard", 'Close', { horizontalPosition: end,duration: 3000 });
      this.router.navigate(['/job']);
      return false;
    }
    return true;
  }
}
