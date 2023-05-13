import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { EmployerServiceService } from 'src/app/appServices/employer/employer-service.service';
import { SecurityService } from 'src/app/appServices/security/security.service';
import { IUserCredentials } from 'src/app/Interface/IDataTypes';
import { IEmployer } from 'src/app/Interface/IEmployer';

@Component({
  selector: 'app-employer-register',
  templateUrl: './employer-register.component.html',
  styleUrls: ['./employer-register.component.css']
})
export class EmployerRegisterComponent {

  constructor(private router: Router,
     private formBuilder: FormBuilder,
     private securityServices:SecurityService,
     private employerServices:EmployerServiceService,
     private _formBuilder: FormBuilder,
     private http: HttpClient){

     }

  error:string='';
  form: FormGroup  = new FormGroup({});
  employerForm: FormGroup  = new FormGroup({});

  ngOnInit(): void {
     this.form = this.formBuilder.group({
      email: ['',{ validators: [Validators.required , Validators.email ]}],
      password: ['',{ validators: [Validators.required  ]}],
     });

     this.employerForm = this.formBuilder.group({
      companyName: ['',{ validators: [Validators.required   ]}],
      companyAbout: ['',{ validators: [Validators.required  ]}],
      companyLogo: ['',{ validators: [Validators.required  ]}],
      founded: ['',{ validators: [Validators.required  ]}],
      headquarters: ['',{ validators: [Validators.required  ]}],
      industry: ['',{ validators: [Validators.required  ]}],
      companyWebsite: ['',{ validators: [Validators.required  ]}],
      companyEmail: ['',{ validators: [Validators.required  ]}],
      companySize: ['',{ validators: [Validators.required  ]}],
     });


  }

  userRegister(userCredentials:IUserCredentials){
    this.error= '';
    this.securityServices.registerUserasCompany(userCredentials).subscribe(authenticationResponse=>{
      this.securityServices.saveToken(authenticationResponse);
      this.securityServices.saveCurrentUserId(authenticationResponse.user.id);
    },error=>this.error = error)
  }

  companyRegister(companydetail:IEmployer){
    this.error= '';
    var id=this.securityServices.getCurrentUserId();
    if(id!==null){
      this.employerServices.registerCompany(companydetail,id).subscribe((authenticationResponse)=>{
      },error=>this.error = error)
    }
  }


}
