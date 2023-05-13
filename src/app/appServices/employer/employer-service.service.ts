import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SecurityService } from '../security/security.service';
import { Observable } from 'rxjs';
import { IEmployer } from '../../Interface/IEmployer';

@Injectable({
  providedIn: 'root'
})
export class EmployerServiceService {
  basURL= "https://localhost:7120";
  constructor(private http:HttpClient,private SecurityServices:SecurityService) { }

  fetchEmployerData(): Observable<IEmployer[]> {
    const token = this.SecurityServices.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<IEmployer[]>(this.basURL+ "/api/employer");
  }

  fetchEmployer(id:number) {
    const token = this.SecurityServices.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.basURL+ "/api/employer/"+id);
  }

  registerCompany(employerDetail:IEmployer,id:string):Observable<IEmployer>{


    employerDetail.UserId = id;
    console.log("totla detail is that sent to the APi",employerDetail);
    var res = this.http.post<IEmployer>(this.basURL+ "/api/employer/create",employerDetail);
    return res;
  }
}
