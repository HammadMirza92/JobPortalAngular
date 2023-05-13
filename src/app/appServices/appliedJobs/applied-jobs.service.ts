import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SecurityService } from '../security/security.service';
import { IAppliedJobs } from 'src/app/Interface/IAppliedJobs';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppliedJobsService {
  baseUrl= "https://localhost:7120";
  private currentCandidateId = 0;
  constructor(private http:HttpClient,private SecurityServices:SecurityService) { }

  applyForJob(Id:number){

    this.currentCandidateId = Number(this.SecurityServices.getCurrentemployerId());
      var data={
      jobId: Id,
      candidateId:this.currentCandidateId
    }
    const url = `${this.baseUrl}/api/appliedJobs/create`;
    const token = this.SecurityServices.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log("candidate ID is",this.SecurityServices.getCurrentemployerId());
    console.log("data is",data);
    var res = this.http.post<IAppliedJobs>(this.baseUrl+ "/api/appliedJobs/create",data).subscribe((ress)=>{
      console.log("applied job is ",ress);
    },
    (error) => {
      console.error('API Error:', error.message);
    });
    return res;
  }

  getCrntCandidateAppliedJobs(id:number): Observable<IAppliedJobs[]>{
   // this.currentCandidateId = Number(this.SecurityServices.getCurrentemployerId());
    return this.http.get<IAppliedJobs[]>(this.baseUrl+ "/api/appliedJobs/GetJobsofCandidate/"+id);

  }


}
