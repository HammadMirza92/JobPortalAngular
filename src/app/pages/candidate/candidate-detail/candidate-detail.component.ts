import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAppliedJobs } from 'src/app/Interface/IAppliedJobs';
import { IJobClasses, IJobType, ILocation, IQualification } from 'src/app/Interface/IDataTypes';
import { AppliedJobsService } from 'src/app/appServices/appliedJobs/applied-jobs.service';
import { CandidateService } from 'src/app/appServices/candidate/candidate.service';
import { EmployerServiceService } from 'src/app/appServices/employer/employer-service.service';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.css']
})
export class CandidateDetailComponent {

  candidateId:string = "";
  candidateById:any;
  appliedJobs:any;
  jobClasses= IJobClasses;

  constructor(private router:ActivatedRoute , private routing:Router,private candidateService:CandidateService,private appliedJobService:AppliedJobsService) {
    this.candidateId = this.router.snapshot.params['id'];
    candidateService.fetchCandidateById(this.candidateId).subscribe((data) => this.candidateById =data);

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
  getqualificationTitle(value: IQualification): string {
    switch (value) {
      case IQualification.Bachelor:
        return 'Bachelor';
      case IQualification.Master:
        return 'Master';
      case IQualification.PHD:
        return 'PHD';

      default:
        return 'Not Defined';
    }
  }
}
