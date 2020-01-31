import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class IpSer {
  constructor(private http: HttpClient) {  }
  getIp() {
    return this.http.get('http://ip.jsontest.com')
    .toPromise()
    .then(res => res.json())
    .then(resJson => resJson.ip)
    .catch(err => console.log(err));
  }
}
