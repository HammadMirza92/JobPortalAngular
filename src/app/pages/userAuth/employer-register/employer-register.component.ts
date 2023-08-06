import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { end } from '@popperjs/core';

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
  isLinear =true;

  constructor(private router: Router,
     private formBuilder: FormBuilder,
     private securityServices:SecurityService,
     private employerServices:EmployerServiceService,
     private _formBuilder: FormBuilder,
     private http: HttpClient, private _snackBar: MatSnackBar){

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
      companyEmail: ['',{ validators: [Validators.required   ]}],
      companyAbout: ['',{ validators: [Validators.required  ]}],
      founded: ['',{ validators: [Validators.required  ]}],
      headquarters: ['',{ validators: [Validators.required  ]}],
      industry: ['',{ validators: [Validators.required  ]}],
      companyWebsite: ['',{ validators: [Validators.required  ]}],
      companySize: ['',{ validators: [Validators.required  ]}],
     });


  }

  userRegister(userCredentials:IUserCredentials){
    this.error= '';
    this.securityServices.registerUserasCompany(userCredentials).subscribe(authenticationResponse=>{
      this.securityServices.saveToken(authenticationResponse.token);
      this.securityServices.saveCurrentUserId(authenticationResponse.user.id);
    },error=>this.userRegistrationError(error))
  }
  userRegistrationError(error:any){
    console.log("login error is ",error.error[0].code);
    this._snackBar.open("Error "+error.error[0].code +"Please Try with different email", 'Close', { horizontalPosition:end, duration: 3000 });
    this.router.navigate(['/register']);
  }


  companyRegister(companydetail:IEmployer){
    this.error= '';
    var id=this.securityServices.getCurrentUserId();
    if(id!==null){
      this.employerServices.registerCompany(companydetail,id).subscribe((authenticationResponse)=>{
        this.securityServices.removeTempData();
      },error=>this.error = error)
    }
  }

  // upload image
  sendImageToAPI(imageFile: File) {
    const formData = new FormData();
    formData.append('image', imageFile, imageFile.name);

    this.http.post('https://localhost:7120/api/employer/uploadImage', formData).subscribe(
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

}
