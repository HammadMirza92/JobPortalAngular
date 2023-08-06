import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { end } from '@popperjs/core';
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
  isLinear = true;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private securityServices:SecurityService,
    private candidateServices:CandidateService,
    private _formBuilder: FormBuilder,
    private http: HttpClient , private _snackBar: MatSnackBar){}

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
      email: ['',{ validators: [Validators.required   ]}],
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

 userRegister(userCredentials:IUserCredentials){
   this.error= '';
   this.securityServices.registerUserasCandidate(userCredentials).subscribe(authenticationResponse=>{
     this.securityServices.saveToken(authenticationResponse.token);
     this.securityServices.saveCurrentUserId(authenticationResponse.user.id);
   },error=>this.userRegistrationError(error))
 }

 userRegistrationError(error:any){
  console.log("login error is ",error.error[0].code);
  this._snackBar.open("Error "+error.error[0].code +" Please Try with different email", 'Close', { horizontalPosition:end, duration: 3000 });
  this.router.navigate(['/register']);
 }

 candidateRegister(candidateDetail:ICandidate){
   this.error= '';
   var id=this.securityServices.getCurrentUserId();
   if(id!==null){
     this.candidateServices.registerCandidate(candidateDetail,id);
   }

 }


 // upload image
sendImageToAPI(imageFile: File) {
  const formData = new FormData();
  formData.append('image', imageFile, imageFile.name);

  this.http.post('https://localhost:7120/api/candidate/uploadImage', formData).subscribe(
    (response) => {
      // Handle the API response
      console.log("response is ",response);
      this.securityServices.saveTempData(response);
    },
    (error) => {
      // Handle any errors
      console.error("erroris",error);
    }
  );
}
onFileSelected(event: any) {
  const file: File = event.target.files[0];
  this.sendImageToAPI(file);
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

}
