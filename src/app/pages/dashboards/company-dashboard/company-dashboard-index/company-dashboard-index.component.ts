import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IJob, IJobType, ILocation } from 'src/app/Interface/IDataTypes';
import { IEmployerToCandidateEmail } from 'src/app/Interface/IEmail';
import { CsvService } from 'src/app/appServices/csv/csv.service';
import { EmailService } from 'src/app/appServices/email/email.service';
import { EmployerServiceService } from 'src/app/appServices/employer/employer-service.service';
import { JobDataService } from 'src/app/appServices/job/job-data.service';
import { SecurityService } from 'src/app/appServices/security/security.service';

@Component({
  selector: 'app-company-dashboard-index',
  templateUrl: './company-dashboard-index.component.html',
  styleUrls: ['./company-dashboard-index.component.css']
})
export class CompanyDashboardIndexComponent {
  employerId:any;
  employerById:any;
  jobs:any;

  constructor( private routing:Router,private employerService:EmployerServiceService,private securityServicse:SecurityService,private jobService:JobDataService,private emailService:EmailService,private csvService:CsvService) {

    this.employerId = securityServicse.getCurrentemployerId();
    employerService.fetchEmployer(this.employerId).subscribe((data) => this.employerById =data);
    this.jobService.fetchAppliedJobs(this.employerId).subscribe((data)=> {
      console.log("data of applied josb is ",data);
      this.jobs = data
    });

  }

  deleteJob(id:string){
    this.jobService.deleteJob(id);
  }

  sendEmail(candidateId:string,JobId:string,employerId:string){
    const EmployerToCandidateEmail = {
      CompanyId:employerId ,
      CandidateId: candidateId,
      JobAppliedId: JobId
    };
    this.emailService.sendEmailToCandidate(EmployerToCandidateEmail);
  }

  jobOfferedCSV(data:any){
    this.csvService.jobOfferedCSVByEmployer(data);
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
