import { Component } from '@angular/core';
import { ICandidate } from 'src/app/Interface/ICandidate';
import { CandidateService } from 'src/app/appServices/candidate/candidate.service';
import { CsvService } from 'src/app/appServices/csv/csv.service';

@Component({
  selector: 'app-candidate-data',
  templateUrl: './candidate-data.component.html',
  styleUrls: ['./candidate-data.component.css']
})
export class CandidateDataComponent {
  candidateData:ICandidate[] = [];

  constructor(private candidateService:CandidateService,private csvServics:CsvService) {

    candidateService.fetchCandidateData().subscribe((data)=> this.candidateData =data );
  }

  allCandidateCSV(){
    this.csvServics.allCandidatesCSV();
  }
}
