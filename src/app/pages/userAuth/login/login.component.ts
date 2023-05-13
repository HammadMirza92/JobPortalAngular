import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/appServices/security/security.service';
import { IUserCredentials } from 'src/app/Interface/IDataTypes';
import { DatePipe,Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { end } from '@popperjs/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router,private location: Location,
    private _snackBar: MatSnackBar, private formBuilder: FormBuilder,private securityServices:SecurityService){}

  error:string='';
  form: FormGroup  = new FormGroup({});

  ngOnInit(): void {
     this.form = this.formBuilder.group({
      email: ['',{ validators: [Validators.required , Validators.email ]}],
      password: ['',{ validators: [Validators.required  ]}],
     });
  }

  saveChanges(userCredentials:IUserCredentials){
    this.error= '';
    this.securityServices.login(userCredentials).subscribe((authenticationResponse)=>{
      this.securityServices.saveToken(authenticationResponse);
      console.log("response is ",authenticationResponse);
      if(authenticationResponse.employerId!=null){
        this.securityServices.setCurrentemployerId(authenticationResponse.employerId);
      }
      if(authenticationResponse.candidateId!=null){
        this.securityServices.setCurrentCandidateId(authenticationResponse.candidateId);
      }
      this.openSnackBar();
      this.router.navigate(['/job']);
    },error=>this.errorFunction(error))

  }
  errorFunction(error:any){
    if(error.error == "Incorrect Login"){
      this._snackBar.open("Invalid Logins PLease Try with valid logins", 'Close', { duration: 3000 })
    }else if(error.status == 0){
      this._snackBar.open("Server Error Please try in a while", 'Close', { duration: 3000 })
    }
  }

  openSnackBar() {
    this._snackBar.open('Yahoo! You are now LogIn', 'Dismiss', {
      horizontalPosition: end,
      duration: 1500,
    });
  }
}
