/*** Feature Module ***/

// Initial Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";

// Development Imports


//Routing 3
import { BugRoutingModule } from "./bug-routing.module";

import { BugListComponent } from "./bug-list/bug-list.component";

import { BugService } from "./bug.service";
import { BugDetailComponent } from './bug-detail/bug-detail.component';

@NgModule({
  imports: [
    CommonModule,

    // Routing 4
    BugRoutingModule,

    SharedModule
  ],
  declarations: [
    BugListComponent,
    BugDetailComponent
  ],
  providers: [ BugService ]
})
export class BugModule { }
