import { ChangeDetectorRef, Component,Input, SimpleChanges } from '@angular/core';
import { SecurityService } from 'src/app/appServices/security/security.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isAuth:boolean =false;
  isCompany:boolean= false;
  isCandidate:boolean=false;


constructor(private cdr: ChangeDetectorRef,private readonly SecurityService:SecurityService) {}

ngOnInit() {
  this.SecurityService.isAuthenticated.subscribe(value => {
    this.isAuth = value;
  });
  this.SecurityService.isCompanyLogin.subscribe(value => {
    this.isCompany = value;
  });
  this.SecurityService.isCandidateLogin.subscribe(value => {
    this.isCandidate = value;
  });

}

logout(){
  debugger;
  this.SecurityService.logout();
}

}
