import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IJob } from '../Interface/IDataTypes';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class JobDataService {

  getJobUrl="https://localhost:7120/api/job/";
  constructor(private http:HttpClient) { }

  fetchJobs():Observable<IJob[]>{
    return this.http.get<any[]>(this.getJobUrl).pipe(
      map((response:any[])=>{
        return response.map((job) => {
          return {
            id: job.id,
            icon: job.icon,
            title:job.title,
            vacancy:job.vacancy,
            description:job.description,
            responsibility:job.responsibility,
            qualifications:job.qualifications,
            status:job.status,
            type:job.type,
            companyDetail:job.companyDetail,
            startBudget:job.startBudget,
            endBudget:job.endBudget,
            startDate:job.startDate,
            endDate:job.endDate,
            location:job.location
          } as IJob;
        });
      })
    );
  }
  fetJobById(id:number){
    return this.http.get(this.getJobUrl + id)
  }
}
