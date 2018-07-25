import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from "./app-routing.module";
//import { CoreModule } from "./core/core.module";
import { BugModule } from "./bugs/bug.module";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BugModule,

    // Test Routing
    AppRoutingModule,

    /* Turned out to not be needed to rout bug-routing.module and display bug-list.component. App wasn't working, but then it was. */
    /* forRoot() brings in providers that CoreModule has provided and configured for itself */
    //CoreModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
