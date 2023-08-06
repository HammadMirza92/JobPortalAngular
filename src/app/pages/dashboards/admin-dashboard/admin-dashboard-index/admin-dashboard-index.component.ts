import { Component } from '@angular/core';
import { IAppliedJobs } from 'src/app/Interface/IAppliedJobs';
import { ICandidate } from 'src/app/Interface/ICandidate';
import { IJob } from 'src/app/Interface/IDataTypes';
import { IEmployer } from 'src/app/Interface/IEmployer';
import { AppliedJobsService } from 'src/app/appServices/appliedJobs/applied-jobs.service';
import { CandidateService } from 'src/app/appServices/candidate/candidate.service';
import { EmployerServiceService } from 'src/app/appServices/employer/employer-service.service';
import { JobDataService } from 'src/app/appServices/job/job-data.service';

@Component({
  selector: 'app-admin-dashboard-index',
  templateUrl: './admin-dashboard-index.component.html',
  styleUrls: ['./admin-dashboard-index.component.css']
})
export class AdminDashboardIndexComponent {

  allAppliedJobs:IAppliedJobs[] =[];
  candidateData:ICandidate[] = [];
  employerData:IEmployer[] = [];
  jobData:IJob[] = [];

  constructor(private appliedJobsService:AppliedJobsService, private candidateService:CandidateService ,private employerService:EmployerServiceService,private jobService:JobDataService) {

    appliedJobsService.getAllAppliedJobs().subscribe((data)=> this.allAppliedJobs=data );
    candidateService.fetchCandidateData().subscribe((data)=> this.candidateData =data );
    employerService.fetchEmployerData().subscribe((data)=> this.employerData =data );
    jobService.getAllJobs().subscribe((data)=>this.jobData=data);
  }
}
