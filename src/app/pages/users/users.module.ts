import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { FinancialComponent } from './financial/financial.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [UsersComponent, RegisterComponent, ListComponent, FinancialComponent, CreditCardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatStepperModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatStepperModule
  ]
})
export class UsersModule { }
