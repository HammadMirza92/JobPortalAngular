import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ViewJobComponent } from './pages/job/view-job/view-job.component';
import { CreateJobComponent } from './pages/job/create-job/create-job.component';
import { JobHomeComponent } from './pages/job/job-home/job-home.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatModule } from './material/mat.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JobListComponent } from './pages/job/job-list/job-list.component';
import { LoginComponent } from './pages/userAuth/login/login.component';
import { RegisterComponent } from './pages/userAuth/register/register.component';
import { EmployersComponent } from './pages/employer/employers/employers.component';
import { CompanyDashboardComponent } from './pages/dashboards/company-dashboard/company-dashboard.component';
import { EmployerDetailComponent } from './pages/employer/employer-detail/employer-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { EmployerRegisterComponent } from './pages/userAuth/employer-register/employer-register.component';
import { CandidateRegisterComponent } from './pages/userAuth/candidate-register/candidate-register.component';

import * as lottie from 'lottie-web';
import { JobPostComponent } from './pages/dashboards/company-dashboard/job-post/job-post.component';
import { CandidateDashboardComponent } from './pages/dashboards/candidate-dashboard/candidate-dashboard.component';
import { JobClassesComponent } from './pages/dashboards/company-dashboard/job-classes/job-classes.component';
import { CandidateComponent } from './pages/candidate/candidate/candidate.component';
import { CandidateDetailComponent } from './pages/candidate/candidate-detail/candidate-detail.component';
import { CandidateListComponent } from './pages/candidate/candidate-list/candidate-list.component';
import { EmployerListComponent } from './pages/employer/employer-list/employer-list.component';
import { CompanyDashboardIndexComponent } from './pages/dashboards/company-dashboard/company-dashboard-index/company-dashboard-index.component';
import { CandidateDashboardIndexComponent } from './pages/dashboards/candidate-dashboard/candidate-dashboard-index/candidate-dashboard-index.component';
import { AppliedJobsComponent } from './pages/dashboards/candidate-dashboard/applied-jobs/applied-jobs.component';
import { EditJobComponent } from './pages/dashboards/company-dashboard/edit-job/edit-job.component';
import { EmailConfirmationComponent } from './pages/userAuth/confirmation/email-confirmation/email-confirmation.component';
import { AdminDashboardComponent } from './pages/dashboards/admin-dashboard/admin-dashboard.component';
import { AdminDashboardIndexComponent } from './pages/dashboards/admin-dashboard/admin-dashboard-index/admin-dashboard-index.component';
import { CandidateDataComponent } from './pages/dashboards/admin-dashboard/candidate-data/candidate-data.component';
import { EmployerDataComponent } from './pages/dashboards/admin-dashboard/employer-data/employer-data.component';
import { AllAppliedJobsComponent } from './pages/dashboards/admin-dashboard/all-applied-jobs/all-applied-jobs.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    JobHomeComponent,
    ViewJobComponent,
    CreateJobComponent,
    JobListComponent,
    LoginComponent,
    RegisterComponent,
    EmployersComponent,
    CompanyDashboardComponent,
    EmployerDetailComponent,
    HomeComponent,
    EmployerRegisterComponent,
    CandidateRegisterComponent,
    JobPostComponent,
    CandidateDashboardComponent,
    JobClassesComponent,
    CandidateComponent,
    CandidateDetailComponent,
    CandidateListComponent,
    EmployerListComponent,
    CompanyDashboardIndexComponent,
    CandidateDashboardComponent,
    CandidateDashboardIndexComponent,
    AppliedJobsComponent,
    EditJobComponent,
    EmailConfirmationComponent,
    AdminDashboardComponent,
    AdminDashboardIndexComponent,
    CandidateDataComponent,
    EmployerDataComponent,
    AllAppliedJobsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
