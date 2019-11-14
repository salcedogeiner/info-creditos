import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CoreService } from 'src/app/core/services/core.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/shared/commons/error-state-matcher';

@Component({
  selector: 'app-users-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public rsFormGroup: FormGroup;
  matcher = new MyErrorStateMatcher();

  @Output() completed = new EventEmitter<boolean>();


  constructor(private todosService: CoreService) { }

  ngOnInit() {

    this.rsFormGroup = new FormGroup({
      Names: new FormControl('', [
        Validators.required,
      ]),
      Document: new FormControl('', [
        Validators.required,
      ]),
      LastName: new FormControl('', [
        Validators.required,
      ]),
      SecondLastName: new FormControl('', [
        Validators.required,
      ]),
      Birthday: new FormControl('', [
        Validators.required,
      ]),
      Phone: new FormControl('', [
        Validators.required,
      ]),
      Address: new FormControl('', [
        Validators.required,
      ]),
      Email: new FormControl('', [
        Validators.required,
      ]),
    });

     console.log(this.rsFormGroup);

  }


 submit() {
   console.log('entro');

  this.completed.emit(true);
 }

}
