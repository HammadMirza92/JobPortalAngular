import { Injectable } from '@angular/core';
import {  CanActivate, Router,  } from '@angular/router';
import { SecurityService } from '../appServices/security/security.service';
import { end } from '@popperjs/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class IsAuthGuard implements CanActivate {
  isAuth:boolean=false;
  constructor( private router: Router, private authService: SecurityService,private _snackBar: MatSnackBar) {

    this.authService.isAuthenticated.subscribe(value => {
      this.isAuth = value;
    });
  }

  canActivate(): boolean {

  }

}
