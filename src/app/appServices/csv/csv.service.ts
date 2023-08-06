import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { end } from '@popperjs/core';
import { IJob } from 'src/app/Interface/IDataTypes';

@Injectable({
  providedIn: 'root'
})
export class CsvService {
  basURL= "https://localhost:7120";

  constructor(private http:HttpClient,
    private _snackBar: MatSnackBar,) { }

    // CSV for Employer of Job Offered
    jobOfferedCSVByEmployer(data:any){
      this._snackBar.open("Please Wait! We are Processing on your request!", 'Close', { horizontalPosition: end,duration: 3000 });
      return this.http.post<IJob[]>(this.basURL+ "/api/CSV/jobOfferedCSV",data).subscribe((res)=>{
        this._snackBar.open("CSV ! File send to your Email", 'Close', { horizontalPosition: end,duration: 3000 })
      });
    }

    // All Candidates CSV
    allCandidatesCSV(){
      this._snackBar.open("Please Wait! We are Processing on your request!", 'Close', { horizontalPosition: end,duration: 3000 });
      return this.http.get(this.basURL+ "/api/CSV/allCandidateCSV").subscribe((res)=>{
        this._snackBar.open("Hello Admin ! File send to your Email", 'Close', { horizontalPosition: end,duration: 3000 })
      });
    }

    // All Employer CSV
    allEmployerCSV(){
      this._snackBar.open("Please Wait! We are Processing on your request!", 'Close', { horizontalPosition: end,duration: 3000 });

      return this.http.get(this.basURL+ "/api/CSV/allEmployerCSV").subscribe((res)=>{
        this._snackBar.open("Hello Admin ! File send to your Email", 'Close', {horizontalPosition: end, duration: 3000 })
      });
    }

    // All Applied Job CSV
    allAppliedJobsCSV(){
      this._snackBar.open("Please Wait! We are Processing on your request!", 'Close', { horizontalPosition: end,duration: 3000 });
      return this.http.get(this.basURL+ "/api/CSV/allAppliedJobsCSV").subscribe((res)=>{
        this._snackBar.open("Hello Admin ! File send to your Email", 'Close', { horizontalPosition: end,duration: 3000 });
      });
    }
}
