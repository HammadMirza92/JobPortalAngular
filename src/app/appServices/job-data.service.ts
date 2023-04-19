import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import { IJob } from '../Interface/IDataTypes';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JobDataService {

  basURL= "https://localhost:7120";
  // getJobUrl="https://localhost:7120/api/job/";
  constructor(private http:HttpClient) { }

  fetchJobs(): Observable<IJob[]> {
    return this.http.get<IJob[]>(this.basURL+ "/api/job/");
  }
  fetJobById(id:number){
    return this.http.get(this.basURL+ "/api/job/" + id)
  }

  getToken(){
    return "aunUjsd988sdasdSdas8d9asd8"
  }

  HeaderToken:any = new HttpHeaders({
    'Authorization': 'Bearer ' + this.getToken()
  });



  fetDemo(){
    // this.http.get('https://localhost:7021/api/test/GetMovies',  this.HeaderToken )
    // .subscribe(response => {
    //   // Handle the response
    // });

    return this.http.get("https://localhost:5002/api/demo");
  }
}
