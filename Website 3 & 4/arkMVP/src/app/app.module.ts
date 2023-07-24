import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ClientComponent } from './client/client.component';
import { MilestoneComponent } from './milestone/milestone.component';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ClientComponent,
    MilestoneComponent,
    ProjectListingComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
