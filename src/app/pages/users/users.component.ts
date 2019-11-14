import { Component, OnInit, ViewChild } from '@angular/core';
import { MatHorizontalStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  financialEnds: boolean;
  registerEnds = false;
  creditCardEnds: boolean;

  @ViewChild('stepper', {static: false}) stepper: MatHorizontalStepper;

  constructor() { }

  ngOnInit() {
  }

  completed($event) {
    this.registerEnds = true;
    this.stepper.next();
    return $event;
  }

}
