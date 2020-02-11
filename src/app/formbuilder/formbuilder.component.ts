import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})

export class FormbuilderComponent implements OnInit {
  FormSignUp: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.FormSignUp = this.fb.group({
      email: ['', [Validators.email, gmailValidator]],
      password: '',
      subjects: this.fb.group({
        angular: false,
        nodejs: true,
        iOS: false
      })
    });
  }

  onSubmit() {
    console.log(this.FormSignUp.value);
  }
}
function gmailValidator(anyName: FormControl) {
  if (anyName.value.includes('@gmail.com')) {
    return null;
  }
  return { gmail: true };
}
