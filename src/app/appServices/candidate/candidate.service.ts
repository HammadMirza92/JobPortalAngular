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

  // Fetch All candidates
  fetchCandidateData(): Observable<ICandidate[]> {
    return this.http.get<ICandidate[]>(this.basURL+ "/api/candidate" );
  }

  // Fetch Candidate By Id
  fetchCandidateById(id:string) {
    return this.http.get(this.basURL+ "/api/candidate/"+id);
  }

  //Register New Candidate
  registerCandidate(candidateDetail:ICandidate,id:string){
    var ProfileImg = this.SecurityServices.getTempData();
    if( ProfileImg!=null){
      candidateDetail.profileImg=ProfileImg;
    }
    candidateDetail.userId = id;
    var res = this.http.post(this.basURL+ "/api/candidate/create/",candidateDetail).subscribe((response)=>{
      console.log("user register response is",response);
    });
    return res;
  }

  //Search Candidate
  searchCandidate(data:any){
    return this.http.post<any>('https://localhost:7120/api/candidate/searchCandidate', data);
  }
}
