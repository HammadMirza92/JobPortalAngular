import { Component } from '@angular/core';
import { ICandidate } from 'src/app/Interface/ICandidate';
import { ILocation } from 'src/app/Interface/IDataTypes';
import { IEmployer } from 'src/app/Interface/IEmployer';
import { CandidateService } from 'src/app/appServices/candidate/candidate.service';
import { EmployerServiceService } from 'src/app/appServices/employer/employer-service.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent {
  candidateData:ICandidate[] = [];

  constructor(private candidateService:CandidateService) {
    candidateService.fetchCandidateData().subscribe((data)=> this.candidateData =data );
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
}
