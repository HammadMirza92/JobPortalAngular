import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IJobType, ILocation } from 'src/app/Interface/IDataTypes';
import { IEmployer } from 'src/app/Interface/IEmployer';
import { EmployerServiceService } from 'src/app/appServices/employer/employer-service.service';

@Component({
  selector: 'app-employer-detail',
  templateUrl: './employer-detail.component.html',
  styleUrls: ['./employer-detail.component.css']
})
export class EmployerDetailComponent {

  employerId:number = 0;
  employerById:any;
  currentDate:any;
  constructor(private router:ActivatedRoute , private routing:Router,private employerService:EmployerServiceService) {
    this.employerId = this.router.snapshot.params['id'];
   employerService.fetchEmployer(this.employerId).subscribe((data) => this.employerById =data);
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
