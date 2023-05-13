import { Component } from '@angular/core';
import { JobDataService } from './appServices/job/job-data.service';
import { SecurityService } from './appServices/security/security.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JobPortal';

  constructor(private securityService:SecurityService) {
  }



}
