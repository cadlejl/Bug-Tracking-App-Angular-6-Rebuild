import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* This module appears to be only for testing and demonstration prior to linking forChild routing deeper in the app. I suspect this module is not doing anything without a path defined. */ 
/**IMPORTANT:** found out this module is needed; currently the only place RouterModule is imported and exported; sould that be delegated to something else? */
// Test Routing from bug-list.component.html, through AppModule 
// (inside imported AppRoutingModule), to <router-outlet> in 
// app.component.ts, to <my-app> in index.html 
//import { BugListComponent } from './bugs/bug-list/bug-list.component';

@NgModule({
  imports: [
    CommonModule,

    // Routing 7
    // Paths are defined here (url handling). 
    RouterModule.forRoot([
      // Root path (doesn't have to be a component).
      //{ path: '', component: BugListComponent /* Test Routing to AppModule */ }
  ])
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
