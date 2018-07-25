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
}
