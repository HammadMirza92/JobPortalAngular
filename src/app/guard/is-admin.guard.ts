import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';

import { SecurityService } from '../appServices/security/security.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { end } from '@popperjs/core';

@Injectable({
  providedIn: 'root'
})

export class IsAdminGuard implements CanActivate {
  isAdmin:boolean=false;
  constructor( private router: Router, private authService: SecurityService,private _snackBar: MatSnackBar) {

    this.authService.isAdminLogin.subscribe(value => {
      this.isAdmin = value;
    });
  }

  canActivate(): boolean {
    if (!this.isAdmin) {
      this._snackBar.open("Please Login as an Admin To acess admin Dashboard", 'Close', { horizontalPosition: end,duration: 3000 });
      this.router.navigate(['/job']);
      return false;
    }
    return true;
  }
}

