import { Component, OnInit } from '@angular/core';

import { Bug } from '../model/bug';

import { BugService } from "../bug.service";

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.css']
})
export class BugListComponent implements OnInit {
  // Initialize and empty Bug array
  private bugs: Bug[] = [];

  constructor(private bugService: BugService) { }

  ngOnInit() {
    this.getAddedBugs();
    this.getUpdatedBugs();
    this.getRemovedBugs();
  }

  getAddedBugs() {
    this.bugService.getAddedBugs().subscribe(
      /*anonymous function(bug: any): void*/
      bug => {
          // Pushing newBug from BugService onto bugs, which is a Bug array.
          this.bugs.push(bug);
      },
      err => {
          console.error("Unable to get added bug - ", err);
      }
    );
  }

  // Lecture 125
  getUpdatedBugs() {
    this.bugService.changedListener().subscribe(
      updatedBug => {
        // .map iterates through every element in the array and returns 
        // everything it finds as an array.
        const bugIndex = this.bugs.map(
          index => index.id
        ).indexOf(
          updatedBug['id']
        );
        this.bugs[bugIndex] = updatedBug;
      },
      err => {
        console.error("Unable to get updated bug - ", err);
      }
    );
  }

  getRemovedBugs() {
    this.bugService.removedListener().subscribe(
      removedBug => {
        // .map iterates through every element in the array and returns 
        // everything it finds as an array.
        const bugIndex = this.bugs.map(
            index => index.id
        ).indexOf(
            removedBug['id']
        );
        this.bugs[bugIndex] = removedBug;
        this.bugs.splice(bugIndex, 1);
      },
      err => {
          console.error("Unable to get updated bug - ", err);
      }
    );
  }
}
