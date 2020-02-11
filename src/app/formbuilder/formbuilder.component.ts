import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      email: ['', Validators.required],
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
