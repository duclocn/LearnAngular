import { Component } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})

export class WordComponent {
  en = 'English';
  vn = 'Viet Nam';
  imageUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  forgot = true;

  toogleForgot() {
    this.forgot = !this.forgot;
  }
}
