import { Component, OnInit, ViewChild } from '@angular/core';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  financialEnds: boolean;
  registerEnds = false;
  creditCardEnds: boolean;

  registerForm: boolean;

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
