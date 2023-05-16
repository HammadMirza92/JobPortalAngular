import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IJobClasses, IJobType, ILocation } from 'src/app/Interface/IDataTypes';
import { AppliedJobsService } from 'src/app/appServices/appliedJobs/applied-jobs.service';
import { CandidateService } from 'src/app/appServices/candidate/candidate.service';
import { SecurityService } from 'src/app/appServices/security/security.service';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})
export class AppliedJobsComponent {
  appliedJobs:any;
  candidateId:any;
  jobClasses= IJobClasses;

  constructor( private routing:Router,private securityService:SecurityService,private appliedJobService:AppliedJobsService) {

    this.candidateId = this.securityService.getCurrentCandidateId();
    appliedJobService.getCrntCandidateAppliedJobs(this.candidateId).subscribe((data)=>this.appliedJobs = data);
  }

  getLocationTitle(value: ILocation): string {
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
  getJobTypeTitle(value: IJobType): string {
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
}
