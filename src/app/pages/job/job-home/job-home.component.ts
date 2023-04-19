import { Component,Input } from '@angular/core';
import { IJob, JobStatus, JobType } from 'src/app/Interface/IDataTypes';
import { JobDataService } from 'src/app/appServices/job-data.service';
import {NgForm} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/appServices/security.service';


@Component({
  selector: 'app-job-home',
  templateUrl: './job-home.component.html',
  styleUrls: ['./job-home.component.css']
})

export class JobHomeComponent {
  AllJobdata:IJob[] = [];

  dataFromHtp:any;

  @Input()
   role:string = '';

   ngOnInit():void{
    console.log("oninit called")
    this.authenticated();
   }

  constructor(private fetchJob:JobDataService,
    private formBuilder:FormBuilder,
    private fetDemo:JobDataService,
    private router: Router,
    private authenticate:SecurityService) {
    fetchJob.fetchJobs().subscribe((data)=>console.log("data from "+data) );
    fetchJob.fetchJobs().subscribe((data)=> this.AllJobdata =data );

   // fetDemo.fetDemo().subscribe((data1)=> this.AllJobdata =data1 );
    fetDemo.fetDemo().subscribe((data)=> this.dataFromHtp = data );

  }


  formatLabel(value: number): string {
    return `${value + 'k'}`;
  }
  formatLabelVacancy(value: number): string {
    return `${value}`;
  }

    selected: Date | null = new Date();



  profileForm = this.formBuilder.group({
    jobTitle:[''],
    jobLocation:[''],

  });
  Jobstatus = JobStatus;

  saveForm(){
    console.log('Form data is ', this.profileForm.value);
  }

  getToken(): any {
    // Get the token from the local storage or any other storage mechanism
    console.log("function called");

  }

  // checkToken(): void {


  //   window.location.href = "https://localhost:7021/Identity/Account/Login";
  // }

  authenticated(){

   // if(this.authenticate.isAuthenticated() == true){
      console.log(this.authenticate.getRole());
    return this.authenticate.getRole() ;
   // }

  }

}
