import { Component,Input } from '@angular/core';
import { IJob, IJobStatus, IJobType } from 'src/app/Interface/IDataTypes';
import { JobDataService } from 'src/app/appServices/job/job-data.service';
import {NgForm} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/appServices/security/security.service';


@Component({
  selector: 'app-job-home',
  templateUrl: './job-home.component.html',
  styleUrls: ['./job-home.component.css']
})

export class JobHomeComponent {
  AllJobdata:IJob[] = [];
  FeatureJobdata:IJob[] = [];


  dataFromHtp:any;



  @Input()
   role:string = '';


  constructor(private fetchJob:JobDataService,
    private formBuilder:FormBuilder,
    private fetDemo:JobDataService,
    private router: Router,
    private Security:SecurityService,
    private authenticate:SecurityService) {

    fetchJob.fetchJobs().subscribe((data)=> this.AllJobdata =data );
    fetchJob.fetchFeatureJobs().subscribe((data)=> this.FeatureJobdata =data );

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
  Jobstatus = IJobStatus;

  saveForm(){
    console.log('Form data is ', this.profileForm.value);
  }


}
