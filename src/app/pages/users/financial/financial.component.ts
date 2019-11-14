import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/core/services/core.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/shared/commons/error-state-matcher';

@Component({
  selector: 'app-users-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss']
})
export class FinancialComponent implements OnInit {

  public rsFormGroup: FormGroup; // form

  matcher = new MyErrorStateMatcher();

  constructor(private todosService: CoreService) { }

  ngOnInit() {

    this.rsFormGroup = new FormGroup({
      Occupation: new FormControl('', [
        Validators.required,
      ]),
      Profession: new FormControl('', [
        Validators.required,
      ]),
      Incomes: new FormControl('', [
        Validators.required,
      ])
    });

     console.log(this.rsFormGroup);

  }


 submit() {}
}
