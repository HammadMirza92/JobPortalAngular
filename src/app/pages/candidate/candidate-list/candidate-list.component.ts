import { Component, Input } from '@angular/core';
import { ICandidate } from 'src/app/Interface/ICandidate';
import { ILocation } from 'src/app/Interface/IDataTypes';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent {
  @Input() candidateData:ICandidate[]= [];
  @Input() candidateSearchData:ICandidate[]= [];
  @Input() searchCandidateNotFoundData:boolean= false;
  @Input() clearSearch:boolean= false;

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
