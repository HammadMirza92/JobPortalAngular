import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IEmployer, ISearchEmployer } from 'src/app/Interface/IEmployer';
import { EmployerServiceService } from 'src/app/appServices/employer/employer-service.service';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent {

  EmployerData:IEmployer[] = [];
  EmployerSearch:IEmployer[] = [];
  EmployerSearchForm:any;
  searchEmployerNotFound =false;
  clearSearch = false;

constructor(private EmployerService:EmployerServiceService,private searchForm:FormBuilder, private _snackBar: MatSnackBar) {
  EmployerService.fetchEmployerData().subscribe((data)=> this.EmployerData =data );
}
ngOnInit(){
  this.createEmployerSearchForm();
}
clear(){
  this.createEmployerSearchForm();
  this.clearSearch = true;
  this.EmployerSearch= [];
}
createEmployerSearchForm(){
  this.EmployerSearchForm = this.searchForm.group({
    EmployerName: [''],
    Headquarters:['']
  })
}

onSubmit(){
  this.clearSearch = false;

  var data:ISearchEmployer ={
    employerName :this.EmployerSearchForm.value.EmployerName,
    headquarters :this.EmployerSearchForm.value.Headquarters,
  }

  this.EmployerService.searchEmployer(data).subscribe((res)=>{
    this.EmployerSearch = res;
    this.searchEmployerNotFound =false;
    if(res.length== 0){
      this._snackBar.open("Ooops! No Data Found Related to your Search . Please try with another!", 'Close', { duration: 3000 })
      this.searchEmployerNotFound =true;
    }
   });

}

}
