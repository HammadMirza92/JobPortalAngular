import { Component } from '@angular/core';
import { SecurityService } from 'src/app/appServices/security/security.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  constructor(private Security:SecurityService) {  }

  logout(){
    this.Security.logout();
  }
}
