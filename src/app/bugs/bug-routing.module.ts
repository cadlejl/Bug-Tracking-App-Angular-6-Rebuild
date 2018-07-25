import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing 1
import { RouterModule } from "@angular/router";

import { BugListComponent } from "./bug-list/bug-list.component";

@NgModule({
  imports: [
    CommonModule,
    
    // Routhing 2
    RouterModule.forChild([
      // paths don't reuire "/"
      // "path" works in child module because BugModule is 
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
