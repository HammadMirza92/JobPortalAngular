import { Component } from '@angular/core';
import { EmployerServiceService } from 'src/app/appServices/employer/employer-service.service';
import { SecurityService } from 'src/app/appServices/security/security.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isAuthenticated = false;
  employerId:number=0;
  employerById:any;
  constructor(private Security:SecurityService,private employerService:EmployerServiceService) {
    this.employerId = Number(this.Security.getCurrentemployerId());
   employerService.fetchEmployer(this.employerId).subscribe((data) => this.employerById =data);
  }


  email = this.Security.crntUserEmail();
}
