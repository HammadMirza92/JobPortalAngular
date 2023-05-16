import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IJobExperience, IJobShift, IJobStatus, IJobType, ILocation, IQualification, ISalaryType } from 'src/app/Interface/IDataTypes';
import { JobDataService } from 'src/app/appServices/job/job-data.service';
import { SecurityService } from 'src/app/appServices/security/security.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent {
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private securityServices:SecurityService,
    private jobService:JobDataService,
    private _formBuilder: FormBuilder,
    private fb: FormBuilder,
   private snackBar: MatSnackBar,
    private http: HttpClient){}

 error:string='';
 jobForm: FormGroup  = new FormGroup({});

 getAllLocation() {
   return Object.values(ILocation).filter(value => typeof value === 'string');
 }

 form: FormGroup = new FormGroup({});

 defaultValue = 'Default Job Title';
 editableValue: string="sdfsdfsdf";

  onSubmits() {
   // Perform the desired action with the editableValue
   console.log(this.editableValue);
 }
 ngOnInit(): void {
  this.jobForm = this.formBuilder.group({
    title: 'Default Job Title'
    // other form controls...
  });
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
 typeOptions =
 [ { value: "FullTime",key : IJobType.FullTime },
   { value: "Freelance",key : IJobType.Freelance },
   { value: "Contract",key : IJobType.Contract } ,
   { value: "Internship",key : IJobType.Internship } ,
   { value: "Temporary",key : IJobType.Temporary } ,
   { value: "PartTime",key : IJobType.PartTime } ,
 ];
 qualificationOptions =
 [ { value: "Bachelor",key : IQualification.Bachelor },
   { value: "Master",key : IQualification.Master },
   { value: "PHD",key : IQualification.PHD } ,
 ];
 salaryOptions =
 [ { value: "Monthly",key : ISalaryType.Monthly },
   { value: "Weekly",key : ISalaryType.Weekly },
   { value: "Hourly",key : ISalaryType.Hourly } ,
   { value: "Yearly",key : ISalaryType.Yearly } ,

 ];
 jobExperienceOptions =
 [ { value: "Fresh",key : IJobExperience.Fresh },
   { value: "One Year",key : IJobExperience.Oneyear },
   { value: "Two Years",key : IJobExperience.Twoyears } ,
   { value: "Three Years",key : IJobExperience.Threeyears } ,
   { value: "Four Years",key : IJobExperience.Fouryears } ,
   { value: "Five Years",key : IJobExperience.Fiveyears } ,
   { value: "Above Five",key : IJobExperience.AboveFive } ,
 ];
 shiftOptions =
 [ { value: "Morning",key : IJobShift.Morning },
   { value: "Evening",key : IJobShift.Evening },
   { value: "Night",key : IJobShift.Night } ,
   { value: "Round",key : IJobShift.Round } ,
 ];
 statusOptions =
 [ { value: "Open",key : IJobStatus.Open },
   { value: "Close",key : IJobStatus.Close },
 ];
 onSubmit() {
   if (this.form.valid) {

     this.jobService.postJob( this.form.value).subscribe((data)=>{
       console.log("job data is",data);
       this.snackBar.open('Job Post Successfully', 'Close', { duration: 3000 });
       this.router.navigate(['/job']);
     },error=>this.error = error);
   } else {
     this.snackBar.open('Please fill in all required fields', 'Close', { duration: 3000 });
   }
 }
}
