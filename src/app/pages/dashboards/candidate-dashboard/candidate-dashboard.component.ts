import { Component } from '@angular/core';
import { CandidateService } from 'src/app/appServices/candidate/candidate.service';
import { EmployerServiceService } from 'src/app/appServices/employer/employer-service.service';
import { SecurityService } from 'src/app/appServices/security/security.service';

@Component({
  selector: 'app-candidate-dashboard',
  templateUrl: './candidate-dashboard.component.html',
  styleUrls: ['./candidate-dashboard.component.css']
})
export class CandidateDashboardComponent {
  isAuthenticated = false;
  candidateId:any;
  candidateById:any;


  constructor(private Security:SecurityService,private candidateService:CandidateService) {
    this.candidateId = this.Security.getCurrentCandidateId();
    candidateService.fetchCandidateById(this.candidateId).subscribe((data) => this.candidateById =data);
  }
  logout(){
    this.Security.logout();
  }
}
