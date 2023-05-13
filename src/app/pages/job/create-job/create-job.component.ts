import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { IJobStatus } from 'src/app/Interface/IDataTypes';


@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent {

  creatJobForm:any;
  JobStatus = Object.keys(IJobStatus).values;



  constructor(private fb:FormBuilder) {  }
  ngOnInit(){
    this.createRegistrationForm();
  }

  createRegistrationForm(){
    this.creatJobForm = this.fb.group({
      jobIcon: [null,Validators.required],
      Title: [null,Validators.required],
      Vacancy: [null,Validators.required],
      Description: [null,Validators.required],
      Responsibility: [null,Validators.required],
      Qualifications: [null,Validators.required],
      Status: [null,Validators.required],
      Type: [null,Validators.required],
      CompanyDetail: [null,Validators.required],
      StartBudget: [null,Validators.required],
      EndBudget: [null,Validators.required],
      StartDate: [null,Validators.required],
      EndDate: [null,Validators.required],
      Location: [null,Validators.required],
    })
  }


  get jobIcon(){
    return this.creatJobForm.get('jobIcon') as FormControl;
  }
  get Title(){
    return this.creatJobForm.get('Title') as FormControl;
  }
  get Vacancy(){
    return this.creatJobForm.get('Vacancy') as FormControl;
  }
  get Description(){
    return this.creatJobForm.get('Description') as FormControl;
  }
  get Responsibility(){
    return this.creatJobForm.get('Responsibility') as FormControl;
  }
  get Qualifications(){
    return this.creatJobForm.get('Qualifications') as FormControl;
  }
  get Status(){
    return this.creatJobForm.get('Status') as FormControl;
  }
  get Type(){
    return this.creatJobForm.get('Type') as FormControl;
  }
  get CompanyDetail(){
    return this.creatJobForm.get('CompanyDetail') as FormControl;
  }
  get StartBudget(){
    return this.creatJobForm.get('StartBudget') as FormControl;
  }
  get EndBudget(){
    return this.creatJobForm.get('EndBudget') as FormControl;
  }
  get StartDate(){
    return this.creatJobForm.get('StartDate') as FormControl;
  }
  get EndDate(){
    return this.creatJobForm.get('EndDate') as FormControl;
  }
  get Location(){
    return this.creatJobForm.get('Location') as FormControl;
  }

  onSubmit(){
    console.log(this.creatJobForm);

  }
}
