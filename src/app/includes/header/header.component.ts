import { Component } from '@angular/core';
import { SecurityService } from 'src/app/appServices/security.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  /**
   *
   */
  constructor(private auth:SecurityService) {


  }

  authorized = this.auth.isAuthenticated();
}
