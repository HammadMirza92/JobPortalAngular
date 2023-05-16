import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SecurityService } from '../security/security.service';
import { IAppliedJobs } from 'src/app/Interface/IAppliedJobs';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';



@Injectable({
  providedIn: 'root'
})
export class AppliedJobsService {
  baseUrl= "https://localhost:7120";
  private currentCandidateId = "";
  constructor(private http:HttpClient,
    private SecurityServices:SecurityService,
    private  route:Router,
    private _snackBar: MatSnackBar,) { }

  applyForJob(jobId:string,employerId:string){

    var currentCandidateId = this.SecurityServices.getCurrentCandidateId();
    if(currentCandidateId !=null){
      this.currentCandidateId = currentCandidateId;
    }

      var data={
      jobsId: jobId,
      candidateId:this.currentCandidateId,
    }

    const token = this.SecurityServices.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    var res = this.http.post<IAppliedJobs>(this.baseUrl+ "/api/appliedJobs/create",data,{headers}).subscribe((ress)=>{
      this._snackBar.open("Great ! Job Applied Successfully", 'Close', { duration: 3000 })
      this.route.navigate(['home']);
    },
    (error) => this.errorFunction(error));
    return res;
  }
  errorFunction(error:any){
    console.log("error is ",error);
    if(error.status == 401 || error.status == 403){
      this._snackBar.open("Sorry! You are not Authorized , PLease login as a candidate to apply for a Job", 'Close', { duration: 3000 })
    }
  }
  getCrntCandidateAppliedJobs(id:string): Observable<IAppliedJobs[]>{
   debugger;
   const token = this.SecurityServices.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<IAppliedJobs[]>(this.baseUrl+ "/api/appliedJobs/GetJobsofCandidate/"+id,{headers});

  }


}
