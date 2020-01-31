import { IpSer } from './ipservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ipservice',
  templateUrl: './ipservice.component.html',
  styleUrls: ['./ipservice.component.css'],
  providers: [IpSer]
})
export class IpserviceComponent implements OnInit {
  ip: string;
  constructor(private ipSer: IpSer) {
    this.ipSer.getIp().then(ip => this.ip).catch(err => console.log(err));
  }

  ngOnInit() {
  }

}
