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
  img2 = 'https://www.google.com/logos/doodles/2020/celebrating-anna-may-wong-4736474120454144-s.png';
}
