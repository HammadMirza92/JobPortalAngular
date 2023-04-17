import { Component, InjectFlags } from '@angular/core';
import { IJob, JobStatus, JobType } from 'src/app/Interface/IDataTypes';
import { JobDataService } from 'src/app/appServices/job-data.service';
@Component({
  selector: 'app-job-home',
  templateUrl: './job-home.component.html',
  styleUrls: ['./job-home.component.css']
})
export class JobHomeComponent {
  AllJobdata:Array<IJob> = [];
  constructor(private fetchJob:JobDataService) {
    fetchJob.fetchJobs().subscribe((data)=> console.log(data) );
    fetchJob.fetchJobs().subscribe((data)=> this.AllJobdata =data );

  }

  JobDetail(id:number){
    console.log("the id is ",id);
  }
}
