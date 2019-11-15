import { Component, OnInit, ViewChild } from '@angular/core';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { FormGroup } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';
import { UserModel } from './user-model';

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

  @ViewChild('list', {static: false}) list: ListComponent;
  @ViewChild('register', {static: false}) register: RegisterComponent;

  constructor() { }

  ngOnInit() {
  }

  edit(el) {
    this.register.userModel = el;
    this.register.setModel();
  }

  completed($event) {
    this.registerEnds = true;
    this.list.getUsers();
    this.stepper.next();
    return $event;
  }

  newReg() {
    this.register.userModel = new UserModel();
    this.register.setModel();
  }

}
