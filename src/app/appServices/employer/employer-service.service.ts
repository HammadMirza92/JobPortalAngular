import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SecurityService } from '../security/security.service';
import { Observable } from 'rxjs';
import { IEmployer, ISearchEmployer } from '../../Interface/IEmployer';

@Injectable({
  providedIn: 'root'
})
export class EmployerServiceService {
  basURL= "https://localhost:7120";
  constructor(private http:HttpClient,private SecurityServices:SecurityService) { }

  // Fetch All Employer
  fetchEmployerData(): Observable<IEmployer[]> {
    return this.http.get<IEmployer[]>(this.basURL+ "/api/employer");
  }

  // Fetch Employer By Id
  fetchEmployer(id:string) {
    return this.http.get(this.basURL+ "/api/employer/"+id);
  }

  // Register New Employer
  registerCompany(employerDetail:IEmployer,id:string):Observable<IEmployer>{

    var CompanyLogo = this.SecurityServices.getTempData();
    if( CompanyLogo!=null){
      employerDetail.companyLogo=CompanyLogo;
    }
    employerDetail.UserId = id;
    console.log("totla detail is that sent to the APi",employerDetail);
    var res = this.http.post<IEmployer>(this.basURL+ "/api/employer/create",employerDetail);
    return res;
  }

  //Search Employer
  searchEmployer(data:any){
    return this.http.post<any>('https://localhost:7120/api/employer/searchEmployer', data);
  }
}
