import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {
  name = '';
  isHiglight = true;
  evenStyle =  {color: 'red', fontSize: '40px'};
  oddStyle =  {color: 'black', fontSize: '20px'};
  currentClass = { circle: !this.isHiglight, square: this.isHiglight };
  constructor() { }

  ngOnInit() {
  }

}
