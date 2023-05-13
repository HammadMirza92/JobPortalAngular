import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IJob,IJobExperience,IJobShift,IJobType,ILocation, IQualification, ISalaryType } from 'src/app/Interface/IDataTypes';
import { AppliedJobsService } from 'src/app/appServices/appliedJobs/applied-jobs.service';
import { JobDataService } from 'src/app/appServices/job/job-data.service';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent {

  jobId:number = 0;
  JobLocation =Location;
  AllJobdata:IJob[] = [];


  JobById:any;

  constructor(private router:ActivatedRoute , private routing:Router,private fetchjobdata:JobDataService,private appliedJobService:AppliedJobsService) {
    this.jobId = this.router.snapshot.params['id'];
    fetchjobdata.fetJobById(this.jobId).subscribe((data) => this.JobById =data);
    fetchjobdata.fetchJobs().subscribe((data)=> this.AllJobdata =data );
   }
   applyNow(jobId:number){
    this.appliedJobService.applyForJob(jobId);
    this.routing.navigate(['job']);
   }

  onBack(){
    this.routing.navigate(['home']);
  }


  getjobTypeTitle(value: number): string {
    switch (value) {
      case IJobType.FullTime:
        return 'FullTime';
      case IJobType.Freelance:
        return 'Freelance';
      case IJobType.Contract:
        return 'Contract';
      case IJobType.Internship:
        return 'Internship';
      case IJobType.Temporary:
        return 'Temporary';
      case IJobType.PartTime:
        return 'PartTime';
      default:
        return 'Not Defined';
    }
  }
  getsalaryTypeTitle(value: number): string {
    switch (value) {
      case ISalaryType.Monthly:
        return 'Monthly';
      case ISalaryType.Weekly:
        return 'Weekly';
      case ISalaryType.Hourly:
        return 'Hourly';
      case ISalaryType.Yearly:
        return 'Yearly';
      default:
        return 'Not Defined';
    }
  }
  getjobShiftTitle(value: number): string {
    switch (value) {
      case IJobShift.Morning:
        return 'Morning';
      case IJobShift.Evening:
        return 'Evening';
      case IJobShift.Night:
        return 'Night';
      case IJobShift.Round:
        return 'Round';
      default:
        return 'Not Defined';
    }
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
  getqualificationTitle(value: number): string {
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
  getJobExpTitle(value: number): string {
    switch (value) {
      case IJobExperience.Fresh:
        return 'Fresh';
      case IJobExperience.Oneyear:
        return 'One Year';
      case IJobExperience.Twoyears:
        return 'Two Years';
      case IJobExperience.Threeyears:
        return 'Three Years';
      case IJobExperience.Fouryears:
        return 'Four Years';
      case IJobExperience.Fiveyears:
        return 'Five Years';
      case IJobExperience.AboveFive:
        return 'More Then Five Years';
      default:
        return 'Not Defined';
    }
  }
  getSkillsTitle(value: number): string {
    switch (value) {
      case IJobExperience.Fresh:
        return 'Fresh';
      case IJobExperience.Oneyear:
        return 'One Year';
      case IJobExperience.Twoyears:
        return 'Two Years';
      case IJobExperience.Threeyears:
        return 'Three Years';
      case IJobExperience.Fouryears:
        return 'Four Years';
      case IJobExperience.Fiveyears:
        return 'Five Years';
      case IJobExperience.AboveFive:
        return 'More Then Five Years';
      default:
        return 'Not Defined';
    }
  }



}
