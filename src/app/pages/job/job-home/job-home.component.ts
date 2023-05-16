import { Component,Input } from '@angular/core';
import { IJob, IJobStatus, IJobType } from 'src/app/Interface/IDataTypes';
import { JobDataService } from 'src/app/appServices/job/job-data.service';
import { FormBuilder } from '@angular/forms';
import { SecurityService } from 'src/app/appServices/security/security.service';


@Component({
  selector: 'app-job-home',
  templateUrl: './job-home.component.html',
  styleUrls: ['./job-home.component.css']
})

export class JobHomeComponent {
  AllJobdata:IJob[] = [];
  FeatureJobdata:IJob[] = [];
  jobsForNormalUser:any;
  FeatureJobsForNormalUser:any;
  dataFromHtp:any;



  constructor(private fetchJob:JobDataService,
    private formBuilder:FormBuilder, private SecurityService:SecurityService) {

    fetchJob.fetchJobsByUserId().subscribe((data)=> this.AllJobdata =data );
    fetchJob.fetchFeatureJobsUserById().subscribe((data)=> this.FeatureJobdata =data );


    fetchJob.fetchJobs().subscribe((data)=> this.jobsForNormalUser =data );
    fetchJob.fetchFeatureJobs().subscribe((data)=> this.FeatureJobsForNormalUser =data );


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
