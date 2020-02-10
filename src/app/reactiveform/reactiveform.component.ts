import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
  FormSignUp: FormGroup;

  constructor() {
    this.FormSignUp = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }
  onSubmit() {
    console.log(this.FormSignUp.value);
  }
}
