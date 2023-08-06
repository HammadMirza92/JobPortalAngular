import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SecurityService } from '../security/security.service';
import { IAppliedJobs } from 'src/app/Interface/IAppliedJobs';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IEmployerToCandidateEmail } from 'src/app/Interface/IEmail';
import { end } from '@popperjs/core';



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

  // get all applied jobs
  getAllAppliedJobs(){
    return this.http.get<IAppliedJobs[]>(this.baseUrl+ "/api/appliedJobs");
  }

  // candidate apply to job function
  applyForJob(jobId:string,employerId:string){

    var currentCandidateId = this.SecurityServices.getCurrentCandidateId();
    if(currentCandidateId !=null){
      this.currentCandidateId = currentCandidateId;
    }

    var data =
    {
      jobsId: jobId,
      candidateId:this.currentCandidateId,
    }

    // this._snackBar.open("Please Wait we ", 'Close', { duration: 3000 })
    // this._snackBar.open("Please wait we are processing on your request", 'Close', {horizontalPosition:end, duration: 3000 })
    this.route.navigate(['/home']);
    const token = this.SecurityServices.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    var res = this.http.post<IAppliedJobs>(this.baseUrl+ "/api/appliedJobs/create",data,{headers}).subscribe((ress)=>{
      this._snackBar.open("Great ! Apply on a Job Successfully", 'Close', {horizontalPosition:end, duration: 3000 })
     // this.route.navigate(['candidateDashboard']);
    },
    (error) => this.errorFunction(error));
    return res;
  }

 //API error function
  errorFunction(error:any){
    console.log("error is ",error);
    if(error.status == 401 || error.status == 403){
      this._snackBar.open("Sorry! You are not Authorized , PLease login as a candidate to apply for this Job", 'Close', { duration: 3000 })
    }
  }

  // Get Login in Candidate applied jobs
  getCrntCandidateAppliedJobs(id:string): Observable<IAppliedJobs[]>{
   debugger;
   const token = this.SecurityServices.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<IAppliedJobs[]>(this.baseUrl+ "/api/appliedJobs/GetJobsofCandidate/"+id,{headers});

  }


}
