import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SecurityService } from '../security/security.service';
import { Observable } from 'rxjs';
import { ICandidate } from '../../Interface/ICandidate';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  basURL= "https://localhost:7120";
  constructor(private http:HttpClient,private SecurityServices:SecurityService, private router:Router) { }

  fetchCandidateData(): Observable<ICandidate[]> {
    // const token = this.SecurityServices.getToken();
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<ICandidate[]>(this.basURL+ "/api/candidate" );
  }
  fetchCandidateById(id:number) {
  //   const token = this.SecurityServices.getToken();
  //  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.basURL+ "/api/candidate/"+id);
  }

  registerCandidate(candidateDetail:ICandidate,id:string){
    candidateDetail.userId = id;
    var res = this.http.post(this.basURL+ "/api/candidate/create/",candidateDetail).subscribe((response)=>{
      console.log("user register response is",response);
    });
    return res;
  }
}
