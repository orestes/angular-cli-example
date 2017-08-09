import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public title$ = Observable
    .interval(1000)
    .map(() => Math.random() * 10);

  constructor() {
    console.log('AppComponent instantiated');
  }

  ngOnInit(): void {
    console.log('AppComponent OnInit');
  }

}
