import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IJob, IAuthenticationResponse, IUserCredentials } from '../../Interface/IDataTypes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe,Location } from '@angular/common';
import { Router } from '@angular/router';
import { IEmployer } from 'src/app/Interface/IEmployer';


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
  private currentUserId = '';
  private currentEmployerId = '';
  private currentCandidateId = '';
  error:any;


  constructor(private http:HttpClient,private location: Location,private router: Router) {
    if(this.getToken() && this.getCurrentuserRole() === "candidate"){
      this._isAuthenticated = new BehaviorSubject<boolean>(true);
      this._isCompanyLogin = new BehaviorSubject<boolean>(false);
      this._isCandidateLogin = new BehaviorSubject<boolean>(true);
    }else if(this.getToken() && this.getCurrentuserRole() === "employer"){
      this._isAuthenticated = new BehaviorSubject<boolean>(true);
      this._isCompanyLogin = new BehaviorSubject<boolean>(true);
      this._isCandidateLogin = new BehaviorSubject<boolean>(false);
    }else{
      this._isAuthenticated = new BehaviorSubject<boolean>(false);
      this._isCompanyLogin = new BehaviorSubject<boolean>(false);
      this._isCandidateLogin = new BehaviorSubject<boolean>(false);
    }
  }

  get isAuthenticated(): Observable<boolean>{
    const token = localStorage.getItem(this.tokenKey);
    if(!token){
      return this._isAuthenticated.asObservable();
    }

    const expiration:any = localStorage.getItem(this.expirationTokenKey);
    var expirationTokenDate = new Date(expiration );

      // if(expirationTokenDate <= new Date()){
      //   debugger;
      //   this.logout();
      //   return this._isAuthenticated.asObservable();
      // }

   return this._isAuthenticated.asObservable();
  }
  get isCompanyLogin(): Observable<boolean>{
   return this._isCompanyLogin.asObservable();
  }
  get isCandidateLogin(): Observable<boolean>{
    return this._isCandidateLogin.asObservable();
   }

  logout(){
    localStorage.clear();
    this._isAuthenticated.next(false);
    this._isCandidateLogin.next(false);
    this._isCompanyLogin.next(false);

    this.router.navigate(['/login']);
  }

  // Normal Users Registration as an company and candidate
  registerUserasCompany(userCredentials:IUserCredentials ):Observable<IAuthenticationResponse>{
     var res = this.http.post<IAuthenticationResponse>(this.baseURL+"api/accounts/createEmployer",userCredentials);
    return res;
  }
  registerUserasCandidate(userCredentials:IUserCredentials ):Observable<IAuthenticationResponse>{

    return this.http.post<IAuthenticationResponse>(this.baseURL+"api/accounts/createCandidate",userCredentials);
  }


  login(userCredentials:IUserCredentials ):Observable<IAuthenticationResponse>{
    //localStorage.setItem(this.roleField, userCredentials.email);
    this.error= '';
    var res = this.http.post<IAuthenticationResponse>(this.baseURL+"api/accounts/login",userCredentials).subscribe((data)=>{
      this._isAuthenticated.next(true);
      if(data.employerId!=null){
        this._isCompanyLogin.next(true);
      }else{
        this._isCandidateLogin.next(true);
      }
    },error=>console.log("error held while login usre",error));

    var ress = this.http.post<IAuthenticationResponse>(this.baseURL+"api/accounts/login",userCredentials);
    return ress;
  }

  saveToken(authenticationResponse: IAuthenticationResponse){
    localStorage.setItem(this.tokenKey, authenticationResponse.token);
  }
  getToken(){
    return localStorage.getItem(this.tokenKey);
  }

  saveCurrentUserId(id:string){
    localStorage.setItem(this.currentUserId, id);
  }
  getCurrentUserId(){
    return localStorage.getItem(this.currentUserId);
  }
  setCurrentemployerId(id:string){
    localStorage.setItem(this.currentEmployerId, id.toString());
  }
  getCurrentemployerId(){
    return localStorage.getItem(this.currentEmployerId);
  }
  setCurrentCandidateId(id:string){

    localStorage.setItem(this.currentCandidateId, id);
  }
  getCurrentCandidateId(){

    return localStorage.getItem(this.currentCandidateId);
  }
  setCurrentuserRole(role:string){
    localStorage.setItem(this.userRole, role.toString());
  }
  getCurrentuserRole(){
    return localStorage.getItem(this.userRole);
  }
}
