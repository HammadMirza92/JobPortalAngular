import { Component } from '@angular/core';
import { IEmployer } from 'src/app/Interface/IEmployer';
import { CsvService } from 'src/app/appServices/csv/csv.service';
import { EmployerServiceService } from 'src/app/appServices/employer/employer-service.service';

@Component({
  selector: 'app-employer-data',
  templateUrl: './employer-data.component.html',
  styleUrls: ['./employer-data.component.css']
})
export class EmployerDataComponent {
  EmployerData:IEmployer[] = [];

  constructor(private employerService:EmployerServiceService,private csvServics:CsvService) {
    employerService.fetchEmployerData().subscribe((data)=> this.EmployerData =data );
  }

  allEmployerCSV(){
    this.csvServics.allEmployerCSV();
  }
}
