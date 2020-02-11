import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nestedformgroup',
  templateUrl: './nestedformgroup.component.html',
  styleUrls: ['./nestedformgroup.component.css']
})
export class NestedformgroupComponent {
  FormSignUp: FormGroup;
  constructor() {
    this.FormSignUp = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      subjects: new FormGroup({
        angular: new FormControl(),
        nodejs: new FormControl(),
        iOS: new FormControl()
      })
    });
  }
  onSubmit() {
    console.log(this.FormSignUp.value);
  }
}
