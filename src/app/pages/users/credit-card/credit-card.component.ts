import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/core/services/core.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/shared/commons/error-state-matcher';

@Component({
  selector: 'app-users-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  public rsFormGroup: FormGroup; // form

  matcher = new MyErrorStateMatcher();

  constructor(private todosService: CoreService) { }

  ngOnInit() {

    this.rsFormGroup = new FormGroup({
      Type: new FormControl('', [
        Validators.required,
      ]),
      PayDay: new FormControl('', [
        Validators.required,
      ]),
    });

    console.log(this.rsFormGroup);

  }


 submit() {}
}
