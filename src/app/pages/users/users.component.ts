import { Component, OnInit, ViewChild } from '@angular/core';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { FormGroup } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';
import { UserModel, FinancialModel } from './user-model';
import { FinancialComponent } from './financial/financial.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  financialEnds: boolean;
  registerEnds = false;
  creditCardEnds: boolean;
  userID = null;
  registerForm: boolean;

  @ViewChild('stepper', {static: false}) stepper: MatHorizontalStepper;

  @ViewChild('list', {static: false}) list: ListComponent;
  @ViewChild('register', {static: false}) register: RegisterComponent;
  @ViewChild('financial', {static: false}) financial: FinancialComponent;

  constructor() { }

  ngOnInit() {
  }

  edit(el) {
    this.register.userModel = el;
    this.financial.user = el.Id;
    this.userID = el.Id;
    this.register.setModel();
    this.financial.setModel();
  }

  completed($event) {
    this.registerEnds = true;
    this.list.getUsers();
    this.stepper.next();
    this.userID = this.register.userModel.Id;
    this.financial.setModel();
    return $event;
  }

  newReg() {
    this.register.userModel = new UserModel();
    this.financial.financialModel = new FinancialModel();
    this.userID = null;
    this.financial.setModel();
    this.register.setModel();
  }

}
