import { Injectable } from '@angular/core';

import { Observable } from "rxjs";

// Reference for injection
import { FirebaseConfigService } from '../core/firebase-config.service';

import { Bug } from "./model/bug";

@Injectable({
  // Not in previous version
  providedIn: 'root'
})
export class BugService {
  // Injected in constructor.
  // .ref('/bugs'): Reference to database at "/bugs" endpoint 
  // (alt: .ref().child('bugs'))
  // I think this is a snapshot. <edit> Nope. It's just a ref to endpoint.
  // .val() is the snapshot.
  private bugsDbRef = this.fb_ConServ.database.ref('/bugs');
  
  constructor(private fb_ConServ: FirebaseConfigService) { }

  getAddedBugs(): Observable<any> {
    return Observable.create(obs => {      
      // Listener
      this.bugsDbRef.on(
        'child_added', 
          
        // callback
        bug => {
          /* val(): extracts the contents of this snapshot and converts it into a js object. We're getting the data back (callback), running this (bug.val()) method on it, and passing all that to whatever subscribes to this observable. "bug.val()" creates a js object, "bug.val() as Bug" creates a custom (casting) js object based on 
          the data model.*/

          // Cast to data model then replace bug.val() with custom object.
          const newBug = bug.val() as Bug;
          //console.log(newBug);// REMOVE
              
          // firebase child key for editing existing bugs. It's 
          // undesirable to pass the id back up to firebase with 
          // the bug because we don't want to save the id within
          // the object in firebase (two instances of it). We just
          // need the reference.
          newBug.id = bug.key;
          //console.log(newBug.id);// REMOVE

          // Presumably could have just done "as Bug" here.
          obs.next(newBug /*bug.val()*/);
        },
        err => {
          obs.throw(err);
        }
      );
    }
    );
  }
}
