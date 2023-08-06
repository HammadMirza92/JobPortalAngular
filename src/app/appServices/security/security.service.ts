import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IJob, IAuthenticationResponse, IUserCredentials } from '../../Interface/IDataTypes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe,Location } from '@angular/common';
import { Router } from '@angular/router';
import { IEmployer } from 'src/app/Interface/IEmployer';
import { MatSnackBar } from '@angular/material/snack-bar';
import { end } from '@popperjs/core';


@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private baseURL="https://localhost:7120/";
  private readonly tokenKey:string ='token';
  private readonly expirationTokenKey:string ='token-expiration';
  private readonly userRole:string="role";
  private _isAuthenticated:BehaviorSubject<boolean>;
  private _isCandidateLogin:BehaviorSubject<boolean>;
  private _isCompanyLogin :BehaviorSubject<boolean>;
  private _isAdminLogin :BehaviorSubject<boolean>;
  private readonly currentUserId:string="currentUserId";
  private readonly currentEmployerId:string="currentEmployerId";
  private readonly currentCandidateId:string="currentCandidateId";
  private readonly tempData:string="tempData";

  error:any;


  constructor(private http:HttpClient,private location: Location,private router: Router ,private _snackBar: MatSnackBar) {

    if(this.getToken() && this.getCurrentuserRole() === "candidate"){
      this._isAuthenticated = new BehaviorSubject<boolean>(true);
      this._isCompanyLogin = new BehaviorSubject<boolean>(false);
      this._isCandidateLogin = new BehaviorSubject<boolean>(true);
      this._isAdminLogin = new BehaviorSubject<boolean>(false);

    }else if(this.getToken() && this.getCurrentuserRole() === "employer"){
      this._isAuthenticated = new BehaviorSubject<boolean>(true);
      this._isCompanyLogin = new BehaviorSubject<boolean>(true);
      this._isCandidateLogin = new BehaviorSubject<boolean>(false);
      this._isAdminLogin = new BehaviorSubject<boolean>(false);
    }else if(this.getToken() && this.getCurrentuserRole() === "admin"){
      this._isAuthenticated = new BehaviorSubject<boolean>(true);
      this._isCompanyLogin = new BehaviorSubject<boolean>(false);
      this._isCandidateLogin = new BehaviorSubject<boolean>(false);
      this._isAdminLogin = new BehaviorSubject<boolean>(true);
    }else{
      this._isAuthenticated = new BehaviorSubject<boolean>(false);
      this._isCompanyLogin = new BehaviorSubject<boolean>(false);
      this._isCandidateLogin = new BehaviorSubject<boolean>(false);
      this._isAdminLogin = new BehaviorSubject<boolean>(false);
    }
  }

  // Get User Login or Not and also check token expiration
  get isAuthenticated(): Observable<boolean>{
    const token = localStorage.getItem(this.tokenKey);
    if(!token){
      return this._isAuthenticated.asObservable();
    }

    const expiration:any = localStorage.getItem(this.expirationTokenKey);
    var newDate  = new Date(expiration);

    if(newDate <= new Date()){
      this.logout();
      return this._isAuthenticated.asObservable();
    }

   return this._isAuthenticated.asObservable();
  }

  // Check Is Company Login or Not
  get isCompanyLogin(): Observable<boolean>{
   return this._isCompanyLogin.asObservable();
  }

  // Check Is Candidate Login or Not
  get isCandidateLogin(): Observable<boolean>{
    return this._isCandidateLogin.asObservable();
  }

  // Check Is Admin Login or Not
  get isAdminLogin(): Observable<boolean>{
    return this._isAdminLogin.asObservable();
  }

  // Logout and clear all the local Storage
  logout(){
    localStorage.clear();
    this._isAuthenticated.next(false);
    this._isCandidateLogin.next(false);
    this._isCompanyLogin.next(false);
    this._isAdminLogin.next(false);

    this.router.navigate(['/login']);
  }

  // Employer / Candidate Registration
  registerUserasCompany(userCredentials:IUserCredentials ):Observable<IAuthenticationResponse>{
     var res = this.http.post<IAuthenticationResponse>(this.baseURL+"api/accounts/createEmployer",userCredentials);
    return res;
  }

  // Candidate Registration
  registerUserasCandidate(userCredentials:IUserCredentials ):Observable<IAuthenticationResponse>{

    return this.http.post<IAuthenticationResponse>(this.baseURL+"api/accounts/createCandidate",userCredentials);
  }


  // Login Every User
  login(userCredentials:IUserCredentials ){
    this.error= '';
    return this.http.post<IAuthenticationResponse>(this.baseURL+"api/accounts/login",userCredentials).subscribe((data)=>{
      this._isAuthenticated.next(true);

      if(data.employerId!=null){
        this._isCompanyLogin.next(true);
        this.setCurrentemployerId(data.employerId);
        this.setCurrentuserRole(data.role);
      }else if(data.candidateId!=null){
        this._isCandidateLogin.next(true);
        this.setCurrentCandidateId(data.candidateId);
        this.setCurrentuserRole(data.role);
      }else if(data.role == "admin"){
        this._isAdminLogin.next(true);
       // this.setCurrentCandidateId(data.candidateId);
        this.setCurrentuserRole(data.role);
      }


      this._snackBar.open('Yahoo! You are now LogIn' , 'Dismiss', { horizontalPosition: end,duration: 1500, });
      this.router.navigate(['/job']);

      // Save Token To LocalStorage
      this.saveToken(data.token);
      this.saveTokenExpDate(data.expiration);
    },error=>this.loginErrorFunction(error))

  }

  // Login Error Function
  loginErrorFunction(error:any){
    if(error.error == "Incorrect Login"){
      this._snackBar.open('Invalid Logins PLease Try with valid logins' , 'Dismiss', { horizontalPosition: end,duration: 1500, });
    }else if(error.status == 0){
      this._snackBar.open('Server Error Please try in a while' , 'Dismiss', { horizontalPosition: end,duration: 3000, });
    }
  }

  // Save Token To LocalStorage
  saveToken(token:string){
    localStorage.setItem(this.tokenKey, token);
  }
  // Get Token From Local torage
  getToken(){
    return localStorage.getItem(this.tokenKey);
  }
  // Save Token Exp Date To LocalStorage
  saveTokenExpDate(date:any){
    localStorage.setItem(this.expirationTokenKey, date);
  }
  //Get Token Exp Date To LocalStorage
  getTokenExpDate(){
    localStorage.getItem(this.expirationTokenKey);
  }
  // Save Current User Id To LocalStorage
  saveCurrentUserId(id:string){
    localStorage.setItem(this.currentUserId, id);
  }
  // Get Current User Id From LocalStorage
  getCurrentUserId(){
    return localStorage.getItem(this.currentUserId);
  }
  // Save Current User Id To LocalStorage
  setCurrentemployerId(id:string){
    localStorage.setItem(this.currentEmployerId, id.toString());
  }
  // Get Current User Id From LocalStorage
  getCurrentemployerId(){
    return localStorage.getItem(this.currentEmployerId);
  }
  // Save Current Candidate Id To LocalStorage
  setCurrentCandidateId(id:string){
    localStorage.setItem(this.currentCandidateId, id);
  }
  // Get Current Candidate Id From LocalStorage
  getCurrentCandidateId(){
    return localStorage.getItem(this.currentCandidateId);
  }
  // Set Current User Role To LocalStorage
  setCurrentuserRole(role:string){
    localStorage.setItem(this.userRole, role.toString());
  }
  //Get Current User Role
  getCurrentuserRole(){
    return localStorage.getItem(this.userRole);
  }
  // Save Temporary Data To LocalStorage
  saveTempData(data:any){
    localStorage.setItem(this.tempData, data.toString());
  }
  // Get Temp Data From LocalStorage
  getTempData(){
    return localStorage.getItem(this.tempData);
  }
  //Remove Temp Data From LocalStorage
  removeTempData(){
    localStorage.removeItem(this.tempData);
  }
}
