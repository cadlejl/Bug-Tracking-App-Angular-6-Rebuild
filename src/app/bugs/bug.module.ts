/*** Feature Module ***/

// Initial Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Development Imports
import { BugRoutingModule } from "./bug-routing.module";

import { BugListComponent } from "./bug-list/bug-list.component";

@NgModule({
  imports: [
    CommonModule,
    BugRoutingModule
  ],
  declarations: [
    BugListComponent
  ]
})
export class BugModule { }
