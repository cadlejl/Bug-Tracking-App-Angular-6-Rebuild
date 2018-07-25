/*** Feature Module ***/

// Initial Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Development Imports

//Routing 3
import { BugRoutingModule } from "./bug-routing.module";

import { BugListComponent } from "./bug-list/bug-list.component";

import { BugService } from "./bug.service";

@NgModule({
  imports: [
    CommonModule,

    // Routing 4
    BugRoutingModule
  ],
  declarations: [
    BugListComponent
  ],
  providers: [ BugService ]
})
export class BugModule { }
