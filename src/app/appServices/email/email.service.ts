import { Injectable } from '@angular/core';
import { SecurityService } from '../security/security.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IEmployerToCandidateEmail } from 'src/app/Interface/IEmail';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  baseUrl= "https://localhost:7120";

  constructor(private http:HttpClient,
    private SecurityServices:SecurityService,
    private  route:Router,
    private _snackBar: MatSnackBar,) { }

    // Send Email To Candidate For Confirmation
    sendEmailToCandidate(data:any){
      debugger;
      const token = this.SecurityServices.getToken();
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      var res = this.http.post(this.baseUrl+ "/api/employerToCandidateEmail/sendEmailToCandidate",data,{headers}).subscribe((ress)=>{
        this._snackBar.open("Email Sent Sucessfully!", 'Close', { duration: 3000 })
        // this.route.navigate(['home']);
      },
      (error) => console.log(error));

      return res;
    }

    //Account Confirmation Email
    confirmEmail(model:any){
      console.log("model is ",model);
      var res = this.http.post(this.baseUrl+ "/api/Accounts/confirmEmail",model).subscribe((ress)=>{
        this._snackBar.open("Email verified Sucessfully!", 'Close', { duration: 3000 })
        this.route.navigate(['job']);
      },
      (error) => console.log(error));

      return res;
    }
}
