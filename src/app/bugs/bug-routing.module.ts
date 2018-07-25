import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from "@angular/router";
import { BugListComponent } from "./bug-list/bug-list.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      // paths don't reuire "/"
      // "path" works in child module bucause BugModule is 
      //      imported into AppModule
      // Paths hit in order
      { path: '', redirectTo: 'bugs', pathMatch: 'full' },
      { path: 'bugs', component: BugListComponent },
      { path: '**', redirectTo: 'bugs' }
    ]) 
  ],
  declarations: []
})
export class BugRoutingModule { }
