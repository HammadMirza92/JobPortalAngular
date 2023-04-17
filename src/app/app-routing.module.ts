import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateJobComponent } from './job/create-job/create-job.component';
import { ViewJobComponent } from './job/view-job/view-job.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JobHomeComponent } from './job/job-home/job-home.component';

const routes: Routes = [
  {
    path:'home',
    component:JobHomeComponent
  },
  {
    path:'create-job',
    component:CreateJobComponent
  },
  {
    path:'home/view-job/:id',
    component:ViewJobComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
