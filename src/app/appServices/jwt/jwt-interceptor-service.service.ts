import { HttpHandler, HttpInterceptor,HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SecurityService } from '../security/security.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorServiceService implements HttpInterceptor {

  constructor(private SecurityServices:SecurityService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const token = this.SecurityServices.getToken();

    if(token){
      req = req.clone({
        setHeaders:{Authorization:`Bearer ${token}`}
      });
    }

    return next.handle(req);
  }
}
