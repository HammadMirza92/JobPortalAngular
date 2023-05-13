import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import { IJob } from '../../Interface/IDataTypes';
import { Observable } from 'rxjs';
import { SecurityService } from '../security/security.service';


@Injectable({
  providedIn: 'root'
})
export class JobDataService {

  basURL= "https://localhost:7120";

  // getJobUrl="https://localhost:7120/api/job/";
  constructor(private http:HttpClient,private SecurityServices:SecurityService) { }

  fetchJobs(): Observable<IJob[]> {

    var userId = Number(this.SecurityServices.getCurrentCandidateId());
    return this.http.get<IJob[]>(this.basURL+ "/api/job/getAll/"+userId);
  }
  fetchFeatureJobs(): Observable<IJob[]> {
    // const token = this.SecurityServices.getToken();
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);.
     var userId = Number(this.SecurityServices.getCurrentCandidateId());
    return this.http.get<IJob[]>(this.basURL+ "/api/job/getFeatureJobs/"+userId);
  }

  fetJobById(id:number){
    return this.http.get(this.basURL+ "/api/job/" + id)
  }


  postJob(data:IJob){
    debugger;
    var currentUserId =  this.SecurityServices.getCurrentUserId();
    data.employerId = Number(currentUserId);
   // const token = this.SecurityServices.getToken();
    //const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
   // return this.http.get<IJob[]>(this.basURL+ "/api/job/getFeatureJobs",{headers});
    return this.http.post(this.basURL+ "/api/job/create",data);

  }


}
