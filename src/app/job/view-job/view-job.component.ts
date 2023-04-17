import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IJob } from 'src/app/Interface/IDataTypes';
import { JobDataService } from 'src/app/appServices/job-data.service';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent {

  propertyId:number = 0;
  ngOnInit(){

  }
  JobById:any;
  constructor(private router:ActivatedRoute , private routing:Router,private fetchjobByid:JobDataService) {
    this.propertyId = this.router.snapshot.params['id'];
    fetchjobByid.fetJobById(this.propertyId).subscribe((data) => this.JobById =data)
   }




  onBack(){
    this.routing.navigate(['home']);
  }
}
