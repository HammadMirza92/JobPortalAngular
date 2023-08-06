import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ICandidate, ISearchCandidate } from 'src/app/Interface/ICandidate';
import { ILocation } from 'src/app/Interface/IDataTypes';
import { CandidateService } from 'src/app/appServices/candidate/candidate.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent {
  candidateData:ICandidate[] = [];
  candidateSearch:ICandidate[] = [];
  searchCandidateNotFound =false;
  CandiadteSearchForm:any;
  clearSearch = false;


  constructor(private candidateService:CandidateService,private searchFormCandidate:FormBuilder, private _snackBar: MatSnackBar) {
    candidateService.fetchCandidateData().subscribe((data)=> this.candidateData =data );
  }

  ngOnInit(){
    this.createCandiadteSearchForm();
  }
  clear(){
    this.createCandiadteSearchForm();
    this.clearSearch = true;
    this.candidateSearch= [];
  }
  createCandiadteSearchForm(){
    this.CandiadteSearchForm = this.searchFormCandidate.group({
      CandidateName: [null],
      CandiadteField:[null],
      Location:[null],
    });
  }


  onSubmit(){
    this.clearSearch = false;

    var data:ISearchCandidate ={
      candidateName :this.CandiadteSearchForm.value.CandidateName,
      candiadteField :this.CandiadteSearchForm.value.CandiadteField,
      location:this.CandiadteSearchForm.value.Location,
    }

    this.candidateService.searchCandidate(data).subscribe((res)=>{
      this.candidateSearch = res;
      this.searchCandidateNotFound =false;
      if(res.length== 0){
        this._snackBar.open("Ooops! No Data Found Related to your Search . Please try with another!", 'Close', { duration: 3000 })
        this.searchCandidateNotFound =true;
      }
     },(error) => console.log(error));

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

}
