import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import { IJob } from '../../Interface/IDataTypes';
import { Observable } from 'rxjs';
import { SecurityService } from '../security/security.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class JobDataService {

  basURL= "https://localhost:7120";

  constructor(private http:HttpClient,private SecurityServices:SecurityService, private _snackBar: MatSnackBar,private  route:Router,) { }

  // Simple Get All Jobs  ,, nothing Includes
  getAllJobs(){
    return this.http.get<IJob[]>(this.basURL+ "/api/job");
  }

  // Fetch Regular Jobs By Candidate Id
  fetchJobsByUserId(): Observable<IJob[]> {
    console.log("fetchJobsByUserId called");
    var userId = this.SecurityServices.getCurrentCandidateId();
    return this.http.get<IJob[]>(this.basURL+ "/api/job/getAll/"+userId);
  }

  // Fetch Feature Jobs By Candidate Id
  fetchFeatureJobsUserById(): Observable<IJob[]> {
    console.log("fetchFeatureJobsUserById called");
     var userId = this.SecurityServices.getCurrentCandidateId();
    return this.http.get<IJob[]>(this.basURL+ "/api/job/getFeatureJobs/"+userId);
  }

  // Fetch All Regular Jobs For Users
  fetchJobs() {
    return this.http.get<IJob[]>(this.basURL+ "/api/job/getAll");
  }

  // Fetch All Feature Jobs For Users
  fetchFeatureJobs(): Observable<IJob[]> {
    return this.http.get<IJob[]>(this.basURL+ "/api/job/getFeatureJobs");
  }

  // Fetch Applied Jobs of Candidate
  fetchAppliedJobs(employerId:string){
    return this.http.get(this.basURL+ "/api/job/FetchJobApplied/"+employerId);
  }

  // fetch Job By Id
  fetJobById(id:string){
    return this.http.get(this.basURL+ "/api/job/" + id)
  }

  // Add New Job
  postJob(data:IJob){
    debugger;
    var currentUSerId = this.SecurityServices.getCurrentemployerId();
    console.log()
    var Icon = this.SecurityServices.getTempData();
    if(currentUSerId != null && Icon!=null){
      data.employerId = currentUSerId;
      data.icon=Icon;
    }

    console.log("data is sent to API is ",data)
    const token = this.SecurityServices.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post(this.basURL+ "/api/job/create/",data,{headers});

  }

  // Add New Job Class
  addJobClass(data:any){
    const token = this.SecurityServices.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(this.basURL+ "/api/job/create/",data,{headers});
  }

  // Delete Job
  deleteJob(id:string){
    const token = this.SecurityServices.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.delete(this.basURL+ "/api/job/delete/"+id,{headers}).subscribe((response)=>{
      this._snackBar.open("Job Deleted Successfully ! ", 'Close', { duration: 3000 })
      this.route.navigate(['/job']);
    },(error) => console.log(error));
  }

  // Search Job
  searchJobs(data:any){
    console.log("data to API is",data)
    return this.http.post<any>('https://localhost:7120/api/job/searchJobs', data);
  }

}
