import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateService } from 'src/app/appServices/candidate/candidate.service';

import { SecurityService } from 'src/app/appServices/security/security.service';
import { ICandidate } from 'src/app/Interface/ICandidate';
import { ILocation, IQualification, IUserCredentials } from 'src/app/Interface/IDataTypes';


@Component({
  selector: 'app-candidate-register',
  templateUrl: './candidate-register.component.html',
  styleUrls: ['./candidate-register.component.css']
})
export class CandidateRegisterComponent {
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private securityServices:SecurityService,
    private candidateServices:CandidateService,
    private _formBuilder: FormBuilder,
    private http: HttpClient){}
    matStepperNexts:any;

 error:string='';
 candidateUserRegister: FormGroup  = new FormGroup({});
 candidateDataRegister: FormGroup  = new FormGroup({});

 ngOnInit(): void {
    this.candidateUserRegister = this.formBuilder.group({
     email: ['',{ validators: [Validators.required , Validators.email ]}],
     password: ['',{ validators: [Validators.required  ]}],
    });

    this.candidateDataRegister = this.formBuilder.group({
      name: ['',{ validators: [Validators.required   ]}],
      profileImg: ['',{ validators: [Validators.required  ]}],
      aboutMe: ['',{ validators: [Validators.required  ]}],
      experience: ['',{ validators: [Validators.required  ]}],
      phone: ['',{ validators: [Validators.required  ]}],
      location: ['',{ validators: [Validators.required  ]}],
      experienceTime: ['',{ validators: [Validators.required  ]}],
      expectedSalary: ['',{ validators: [Validators.required  ]}],
      age: ['',{ validators: [Validators.required  ]}],
      qualification: ['',{ validators: [Validators.required  ]}],
     });

 }
 locationOptions =
 [ { value: "Lahore",key : ILocation.Lahore },
   { value: "Islamabad",key : ILocation.Islamabad },
   { value: "Karachi",key : ILocation.Karachi } ,
   { value: "Multan",key : ILocation.Multan } ,
   { value: "Hydarabad",key : ILocation.Hydarabad } ,
   { value: "Gujranwala",key : ILocation.Gujranwala } ,
   { value: "Faisalabad",key : ILocation.Faisalabad } ,
   { value: "Sialkot",key : ILocation.Sialkot } ,
   { value: "Peshawar",key : ILocation.Peshawar } ,
 ];
 qualificationOptions =
  [ { value: "Bachelor",key : IQualification.Bachelor },
    { value: "Master",key : IQualification.Master },
    { value: "PHD",key : IQualification.PHD } ,
  ];
 userRegister(userCredentials:IUserCredentials){
   this.error= '';
   this.securityServices.registerUserasCandidate(userCredentials).subscribe(authenticationResponse=>{
     this.securityServices.saveToken(authenticationResponse);
     this.securityServices.saveCurrentUserId(authenticationResponse.user.id);
   },error=>this.error = error)
 }

 candidateRegister(candidateDetail:ICandidate){
   this.error= '';
   var id=this.securityServices.getCurrentUserId();
   if(id!==null){
     this.candidateServices.registerCandidate(candidateDetail,id);
   }
   this.matStepperNexts = true;
 }


 firstCandidateFormGroup = this._formBuilder.group({

});
secondCandidateFormGroup = this._formBuilder.group({

});

}
