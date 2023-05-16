import { Component } from '@angular/core';
import { IJobType, ILocation } from 'src/app/Interface/IDataTypes';
import { CandidateService } from 'src/app/appServices/candidate/candidate.service';
import { JobDataService } from 'src/app/appServices/job/job-data.service';
import { SecurityService } from 'src/app/appServices/security/security.service';

@Component({
  selector: 'app-candidate-dashboard-index',
  templateUrl: './candidate-dashboard-index.component.html',
  styleUrls: ['./candidate-dashboard-index.component.css']
})
export class CandidateDashboardIndexComponent {
  candidateId:any;
  candidateById:any;
  jobs:any;
  featureJobs:any;

  constructor(private Security:SecurityService,private candidateService:CandidateService,private fetchJob:JobDataService) {

    this.candidateId = this.Security.getCurrentCandidateId();
    candidateService.fetchCandidateById(this.candidateId).subscribe((data) => this.candidateById =data);

    fetchJob.fetchJobs().subscribe((data)=> this.jobs =data );
    fetchJob.fetchFeatureJobs().subscribe((data)=> this.featureJobs =data );
  }

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
}
