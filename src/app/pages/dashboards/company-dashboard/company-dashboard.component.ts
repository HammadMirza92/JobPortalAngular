import { Component } from '@angular/core';
import { EmployerServiceService } from 'src/app/appServices/employer/employer-service.service';
import { SecurityService } from 'src/app/appServices/security/security.service';


@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent {
  isAuthenticated = false;
  employerId:any;
  employerById:any;

  constructor(private Security:SecurityService,private employerService:EmployerServiceService) {
    this.employerId = this.Security.getCurrentemployerId();
   employerService.fetchEmployer(this.employerId).subscribe((data) => this.employerById =data);
  }

  logout(){
    this.Security.logout();
  }

}
