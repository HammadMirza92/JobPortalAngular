import { Component, Input } from '@angular/core';
import { IEmployer } from 'src/app/Interface/IEmployer';

@Component({
  selector: 'app-employer-list',
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.css']
})
export class EmployerListComponent {
  @Input() EmployerData:IEmployer[]= [];
}
