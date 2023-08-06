import { Component } from '@angular/core';
import { IAppliedJobs } from 'src/app/Interface/IAppliedJobs';
import { AppliedJobsService } from 'src/app/appServices/appliedJobs/applied-jobs.service';
import { CsvService } from 'src/app/appServices/csv/csv.service';

@Component({
  selector: 'app-all-applied-jobs',
  templateUrl: './all-applied-jobs.component.html',
  styleUrls: ['./all-applied-jobs.component.css']
})
export class AllAppliedJobsComponent {

  allAppliedJobs:IAppliedJobs[] =[];

  constructor(private appliedJobsService:AppliedJobsService,private csvServics:CsvService) {

    appliedJobsService.getAllAppliedJobs().subscribe((data)=> this.allAppliedJobs=data );

  }

  allAppliedJobsCSV(){
    this.csvServics.allAppliedJobsCSV();

  }
}
