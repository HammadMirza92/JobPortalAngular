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

  fetchJobsByUserId(): Observable<IJob[]> {
    var userId = this.SecurityServices.getCurrentCandidateId();
    return this.http.get<IJob[]>(this.basURL+ "/api/job/getAll/"+userId);
  }
  fetchFeatureJobsUserById(): Observable<IJob[]> {
     var userId = this.SecurityServices.getCurrentCandidateId();
    return this.http.get<IJob[]>(this.basURL+ "/api/job/getFeatureJobs/"+userId);
  }

  fetchJobs() {
    return this.http.get<IJob[]>(this.basURL+ "/api/job");
  }
  fetchFeatureJobs(): Observable<IJob[]> {
    return this.http.get<IJob[]>(this.basURL+ "/api/job/getFeatureJobs");
  }

  fetchAppliedJobs(employerId:string){
    return this.http.get<IJob[]>(this.basURL+ "/api/job/FetchJobApplied/"+employerId);
  }


  fetJobById(id:string){
    return this.http.get(this.basURL+ "/api/job/" + id)
  }

  postJob(data:IJob){
    var currentUSerId = this.SecurityServices.getCurrentUserId();
    if(currentUSerId != null){
      data.employerId = currentUSerId;
    }

   // const token = this.SecurityServices.getToken();
    //const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
   // return this.http.get<IJob[]>(this.basURL+ "/api/job/getFeatureJobs",{headers});
    return this.http.post(this.basURL+ "/api/job/create",data);

  }


}
