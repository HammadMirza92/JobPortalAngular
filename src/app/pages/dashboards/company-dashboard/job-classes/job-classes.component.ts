import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ILocation, IJobClasses } from 'src/app/Interface/IDataTypes';
import { JobDataService } from 'src/app/appServices/job/job-data.service';
import { SecurityService } from 'src/app/appServices/security/security.service';

@Component({
  selector: 'app-job-classes',
  templateUrl: './job-classes.component.html',
  styleUrls: ['./job-classes.component.css']
})
export class JobClassesComponent {
  jobId:number = 0;
  error:string='';


  constructor(private routing: Router,
    private formBuilder: FormBuilder,
    private securityServices:SecurityService,
    private jobService:JobDataService,
    private _formBuilder: FormBuilder,
    private fb: FormBuilder,
   private snackBar: MatSnackBar,
    private http: HttpClient,
    private router:ActivatedRoute ){

      this.jobId = this.router.snapshot.params['id'];
      // fetchjobdata.fetJobById(this.jobId).subscribe((data) => this.JobById =data);
      // fetchjobdata.fetchJobs().subscribe((data)=> this.AllJobdata =data );
    }




  form: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.form = new FormGroup({
      jobClasses: new FormControl('', Validators.required),
    });

  }

  onSubmit() {
    if (this.form.valid) {

      this.jobService.postJob( this.form.value).subscribe((data)=>{
        console.log("job data is",data);
      },error=>this.error = error);
    } else {
      this.snackBar.open('Please fill in all required fields', 'Close', { duration: 3000 });
    }
  }


  jobClassesOptions =
  [ { value: "Feature",key : IJobClasses.Feature },
    { value: "Remote",key : IJobClasses.Remote },
    { value: "Urgent",key : IJobClasses.Urgent } ,

  ];
}
