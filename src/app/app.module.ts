import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewJobComponent } from './job/view-job/view-job.component';
import { CreateJobComponent } from './job/create-job/create-job.component';


import {HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { JobHomeComponent } from './job/job-home/job-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatModule } from './material/mat.module';



@NgModule({
  declarations: [
    AppComponent,
    ViewJobComponent,
    CreateJobComponent,
    PageNotFoundComponent,
    HeaderComponent,
    JobHomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
