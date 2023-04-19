import { Component,Input } from '@angular/core';
import { IJob, JobStatus } from 'src/app/Interface/IDataTypes';
import { JobDataService } from 'src/app/appServices/job-data.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent {

  @Input() jobs:IJob[]= [];





  JobStatus = JobStatus;

  getEnumTitle(value: number): string {
    switch (value) {
      case JobStatus.FullTime:
        return 'Full Time';
      case JobStatus.PartTime:
        return 'Part Time';
      case JobStatus.Contract:
        return 'Contract';
      // Add more cases for additional enum values
      default:
        return 'Not Defined';
    }
  }

  functionCalled(jobTitle:string){
    console.log("job title is  ",jobTitle);
  }

}
