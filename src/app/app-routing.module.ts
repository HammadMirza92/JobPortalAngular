import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateJobComponent } from './pages/job/create-job/create-job.component';
import { ViewJobComponent } from './pages/job/view-job/view-job.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { JobHomeComponent } from './pages/job/job-home/job-home.component';
import { IsAdminGuard } from './guard/is-admin.guard';
import { LoginComponent } from './pages/userAuth/login/login.component';
import { RegisterComponent } from './pages/userAuth/register/register.component';

const routes: Routes = [
  { path:'home',component:JobHomeComponent},
  { path:'create-job',component:CreateJobComponent, canActivate:[IsAdminGuard]},
  { path:'home/view-job/:id', component:ViewJobComponent },
  { path:'login', component:LoginComponent },
  { path:'register', component:RegisterComponent },
  { path:'**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
