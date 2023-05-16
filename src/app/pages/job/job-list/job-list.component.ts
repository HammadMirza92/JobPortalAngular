import { Component,Input } from '@angular/core';
import { IJob, JobClass, IJobStatus, ILocation, IJobType, IJobClasses } from 'src/app/Interface/IDataTypes';
import { SecurityService } from 'src/app/appServices/security/security.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent {

  role:string = '';

  constructor(public SecurityService:SecurityService) {
  }


  @Input() jobs:IJob[]= [];
  @Input() Featurejobs:IJob[]= [];
  @Input() FeatureJobsForNormalUserData:IJob[]= [];
  @Input() jobsForNormalUserData:IJob[]= [];

  Feature ="Feature";
  jobClasses= IJobClasses

  JobLocation =location;


  getLocationTitle(value: any): string {
    switch (value) {
      case ILocation.Lahore:
        return 'Lahore';
      case ILocation.Islamabad:
        return 'Islamabad';
      case ILocation.Karachi:
        return 'Karachi';
      case ILocation.Multan:
        return 'Multan';
      case ILocation.Hydarabad:
        return 'Hydarabad';
      case ILocation.Gujranwala:
        return 'Gujranwala';
      case ILocation.Faisalabad:
        return 'Faisalabad';
      case ILocation.Sialkot:
        return 'Sialkot';
      case ILocation.Peshawar:
      return 'Peshawar';
      default:
        return 'Not Defined';
    }
  }

  getJobTypeTitle(value: any): string {
    switch (value) {
      case IJobType.FullTime:
        return 'Full Time';
      case IJobType.Freelance:
        return 'Freelance';
      case IJobType.Contract:
        return 'Contract';
      case IJobType.Internship:
        return 'Internship';
      case IJobType.Temporary:
        return 'Temporary';
      case IJobType.PartTime:
        return 'Part Time';
      default:
        return 'Not Defined';
    }
  }

  functionCalled(jobTitle:string){
    console.log("job title is  ",jobTitle);
  }

}
