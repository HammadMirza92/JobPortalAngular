import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ViewJobComponent } from './pages/job/view-job/view-job.component';
import { CreateJobComponent } from './pages/job/create-job/create-job.component';
import { JobHomeComponent } from './pages/job/job-home/job-home.component';

import {HttpClientModule} from '@angular/common/http';
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
