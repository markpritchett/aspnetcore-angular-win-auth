import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  values: string[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService
      .getValues()
      .subscribe(
      values => this.values = values,
      error => console.log(error)
      );
  }
}