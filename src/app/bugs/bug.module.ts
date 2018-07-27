/*** Feature Module ***/

// Initial Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Development Imports

import { SharedModule } from "../shared/shared.module";
import { /*FormsModule,*/ ReactiveFormsModule } from "@angular/forms";

//Routing 3
import { BugRoutingModule } from "./bug-routing.module";

import { BugListComponent } from "./bug-list/bug-list.component";
import { BugDetailComponent } from './bug-detail/bug-detail.component';

import { BugService } from "./bug.service";

@NgModule({
  imports: [
    CommonModule,

    // Routing 4
    BugRoutingModule,

    SharedModule,
    // FormsModule, ReactiveForms was enough to stop the formGroup error
    ReactiveFormsModule
  ],
  declarations: [
    BugListComponent,
    BugDetailComponent
  ],
  providers: [ BugService ]
})
export class BugModule { }
