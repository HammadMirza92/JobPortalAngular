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
import { EmployerDetailComponent } from './pages/employer/employer-detail/employer-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { CandidateRegisterComponent } from './pages/userAuth/candidate-register/candidate-register.component';
import { EmployerRegisterComponent } from './pages/userAuth/employer-register/employer-register.component';
import { JobClassesComponent } from './pages/dashboards/company-dashboard/job-classes/job-classes.component';
import { CandidateComponent } from './pages/candidate/candidate/candidate.component';
import { CandidateDetailComponent } from './pages/candidate/candidate-detail/candidate-detail.component';
import { CandidateDashboardComponent } from './pages/dashboards/candidate-dashboard/candidate-dashboard.component';
import { CompanyDashboardComponent } from './pages/dashboards/company-dashboard/company-dashboard.component';
import { EditJobComponent } from './pages/dashboards/company-dashboard/edit-job/edit-job.component';
import { IsCandidateGuard } from './guard/is-candidate.guard';
import { IsEmployerGuard } from './guard/is-employer.guard';
import { IsAuthGuard } from './guard/is-auth.guard';
import { EmailConfirmationComponent } from './pages/userAuth/confirmation/email-confirmation/email-confirmation.component';
import { AdminDashboardComponent } from './pages/dashboards/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //Job URLs
  { path:'job',component:JobHomeComponent},
  { path:'job/view-job/:id', component:ViewJobComponent },

  //Employer URLs
  { path:'employers', component:EmployersComponent },
  { path:'employers/employer-detail/:id', component:EmployerDetailComponent },

  //Candidate URLs
  { path:'candidate', component:CandidateComponent},
  { path:'candidate/candidate-detail/:id', component:CandidateDetailComponent },

  //Login Register URLs
  { path:'login', component:LoginComponent ,canActivate:[IsAuthGuard] },
  { path:'register', component:RegisterComponent ,canActivate:[IsAuthGuard] },
  { path:'register/candidateregister', component:CandidateRegisterComponent,canActivate:[IsAuthGuard] },
  { path:'register/employerRegister', component:EmployerRegisterComponent ,canActivate:[IsAuthGuard]},

  //Company Dashboards URLs
  { path:'companyDashboard', component:CompanyDashboardComponent,canActivate:[IsEmployerGuard]},
  { path:'companydashboard/jobclasses/:id', component:JobClassesComponent,canActivate:[IsEmployerGuard] },
  { path:'eidtJob/:id', component:EditJobComponent,canActivate:[IsEmployerGuard] },

  //Candidate Dashboards URLs
  { path:'candidateDashboard', component:CandidateDashboardComponent,canActivate:[IsCandidateGuard]},

  //Admin Dashboards URLs
  { path:'adminDashboard', component:AdminDashboardComponent,canActivate:[IsAdminGuard]},


  //Others
  { path:'home', component:HomeComponent },
  { path:'email-confirmation', component:EmailConfirmationComponent },
  { path:'**', component:PageNotFoundComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
