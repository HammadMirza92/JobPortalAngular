import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from 'src/app/appServices/email/email.service';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.css']
})
export class EmailConfirmationComponent {

  urlParams:any={};

  constructor(private route:ActivatedRoute,private emailService:EmailService) {

  }
  ngOnInit(){
    this.urlParams.token = this.route.snapshot.queryParamMap.get('token');
    this.urlParams.userid = this.route.snapshot.queryParamMap.get('userId');

    console.log("token is ",this.route.snapshot.queryParamMap.get('token'));
    console.log("userId is ",this.route.snapshot.queryParamMap.get('userId'));
    this.confirmEmail();
  }
  confirmEmail(){
    console.log("confirm email function is called");
   this.emailService.confirmEmail(this.urlParams);

  }
}
