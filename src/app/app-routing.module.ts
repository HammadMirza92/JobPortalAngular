import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateJobComponent } from './pages/job/create-job/create-job.component';
import { ViewJobComponent } from './pages/job/view-job/view-job.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { JobHomeComponent } from './pages/job/job-home/job-home.component';
import { IsAdminGuard } from './guard/is-admin.guard';
import { LoginComponent } from './pages/userAuth/login/login.component';
import { RegisterComponent } from './pages/userAuth/register/register.component';
import { EmployersComponent } from './pages/employer/employers/employers.component';
import { DashboardComponent } from './pages/dashboardCompany/dashboard/dashboard.component';
import { EmployerDetailComponent } from './pages/employer/employer-detail/employer-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { CandidateRegisterComponent } from './pages/userAuth/candidate-register/candidate-register.component';
import { EmployerRegisterComponent } from './pages/userAuth/employer-register/employer-register.component';
import { JobClassesComponent } from './pages/dashboardCompany/company-dashboard/job-classes/job-classes.component';
import { CandidateComponent } from './pages/candidate/candidate/candidate.component';
import { CandidateDetailComponent } from './pages/candidate/candidate-detail/candidate-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'job',component:JobHomeComponent},
  { path:'create-job',component:CreateJobComponent, canActivate:[IsAdminGuard]},
  { path:'job/view-job/:id', component:ViewJobComponent },
  { path:'companydashboard/jobclasses/:id', component:JobClassesComponent },
  { path:'login', component:LoginComponent },
  { path:'register', component:RegisterComponent },
  { path:'employers', component:EmployersComponent },
  { path:'employers/employer-detail/:id', component:EmployerDetailComponent },
  { path:'dashboard', component:DashboardComponent},
  { path:'register/candidateregister', component:CandidateRegisterComponent },
  { path:'register/employerRegister', component:EmployerRegisterComponent },
  { path:'home', component:HomeComponent },
  { path:'candidate', component:CandidateComponent },
  { path:'candidate/candidate-detail/:id', component:CandidateDetailComponent },
  { path:'**', component:PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
