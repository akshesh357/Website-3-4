import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'
import { ProjectApi, SDKModels, LoopBackAuth, InternalStorage, JSONSearchParams, ClientApi, ErrorHandler, Client, LoggerService, RealTime, UserApi, MilestoneApi } from './shared/sdk/index';
import { HttpModule } from '@angular/http';
import { SocketConnection } from './shared/sdk/sockets/socket.connections';
import { SocketDriver } from './shared/sdk/sockets/socket.driver';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { CreateCompanyPageComponent } from './create-company-page/create-company-page.component';
import { CreateProjectPageComponent } from './create-project-page/create-project-page.component';
import { MonthlyInvoiceReminderPageComponent } from './monthly-invoice-reminder-page/monthly-invoice-reminder-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
//import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgDatepickerModule } from 'ng2-datepicker';
import { DataTablesModule } from 'angular-datatables';
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ProjectsPageComponent,
    CreateCompanyPageComponent,
    CreateProjectPageComponent,
    MonthlyInvoiceReminderPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterTestingModule,
    NgDatepickerModule,
    DataTablesModule
  ],
  providers: [ProjectApi,SocketConnection,SocketDriver,SDKModels,LoopBackAuth,InternalStorage,JSONSearchParams,ClientApi,ErrorHandler,LoggerService,RealTime,UserApi,MilestoneApi],
  bootstrap: [AppComponent]
})
export class AppModule {


}
