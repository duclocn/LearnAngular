import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formtemplate',
  templateUrl: './formtemplate.component.html',
  styleUrls: ['./formtemplate.component.css']
})
export class FormtemplateComponent implements OnInit {
  username = '';
  password = '';
  constructor() { }

  ngOnInit() {
  }

  onSubmit(nameOfForm) {
    console.log(nameOfForm.value);
  }

}