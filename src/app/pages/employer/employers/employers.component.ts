import { Component } from '@angular/core';
import { IEmployer } from 'src/app/Interface/IEmployer';
import { EmployerServiceService } from 'src/app/appServices/employer/employer-service.service';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent {

  EmployerData:IEmployer[] = [];

constructor(private EmployerService:EmployerServiceService) {
  EmployerService.fetchEmployerData().subscribe((data)=> this.EmployerData =data );
}

}
