import { Component,Input } from '@angular/core';
import { IJob, IJobClasses, IJobExperience, IJobSearch, IJobShift, IJobStatus, IJobType, ILocation, IQualification, ISalaryType } from 'src/app/Interface/IDataTypes';
import { JobDataService } from 'src/app/appServices/job/job-data.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { SecurityService } from 'src/app/appServices/security/security.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-job-home',
  templateUrl: './job-home.component.html',
  styleUrls: ['./job-home.component.css']
})

export class JobHomeComponent {
  AllJobdata:IJob[] = [];
  FeatureJobdata:IJob[] = [];
  jobsForNormalUser:IJob[] = [];
  FeatureJobsForNormalUser:IJob[] = [];
  jobSearch:IJob[] = [];
  searchJobNotFound =false;
  jobSearchForm:any;
  clearSearch = false;

  constructor(private jobService:JobDataService, private jobForms:FormBuilder, private SecurityService:SecurityService,private _snackBar: MatSnackBar) {

    jobService.fetchJobsByUserId().subscribe((data)=> this.AllJobdata =data );
    jobService.fetchFeatureJobsUserById().subscribe((data)=> this.FeatureJobdata =data );


    jobService.fetchJobs().subscribe((data)=> this.jobsForNormalUser =data );
    jobService.fetchFeatureJobs().subscribe((data)=> this.FeatureJobsForNormalUser =data );

  }

  ngOnInit(){
    this.createCandiadteSearchForm();

  }
  clear(){
    this.createCandiadteSearchForm();
    this.clearSearch = true;
    this.jobSearch= [];
  }
  createCandiadteSearchForm(){
    this.jobSearchForm = this.jobForms.group({
      Title: [''],
      Location:[null],
      Type:[null],
      Qualification:[null],
      SalarayType:[null],
      StartBudget:[null],
      EndBudget:[null],
      JobExperience:[null],
      JobShift:[null],
      JobClass:[null]
    });
  }

  onSubmit(){
    this.clearSearch = false;

    var data:IJobSearch ={
      title :this.jobSearchForm.value.Title,
      location:this.jobSearchForm.value.Location,
      type :this.jobSearchForm.value.Type,
      qualification: this.jobSearchForm.value.Qualification,
      salaryType: this.jobSearchForm.value.SalarayType,
      startBudget: this.jobSearchForm.value.StartBudget,
      endBudget: this.jobSearchForm.value.EndBudget,
      jobExperience: this.jobSearchForm.value.JobExperience,
      jobShift: this.jobSearchForm.value.JobShift,
      jobClass:this.jobSearchForm.value.JobClass,
    }

    console.log("job search data is ",data);
    this.jobService.searchJobs(data).subscribe((res)=>{
      this.jobSearch = res;
      this.searchJobNotFound =false;
      if(res.length== 0){
        this._snackBar.open("Ooops! No Data Found Related to your Search . Please try with another!", 'Close', { duration: 3000 })
        this.searchJobNotFound =true;
      }
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
  jobClassOptions =
  [ { value: "Feature",key : IJobClasses.Feature },
    { value: "Urgent",key : IJobClasses.Urgent },
    { value: "Remote",key : IJobClasses.Remote } ,
  ];
}
