import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class DataService {
  constructor(private http: Http) { }

  getValues() {
    return this.http
      .get('/api/values')
      .map(res => res.json());
  }
}