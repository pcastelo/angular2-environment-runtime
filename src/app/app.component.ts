import { Component, OnInit } from '@angular/core';
import { Config } from './app-config/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';


  constructor(private config: Config) {
  }

  ngOnInit(): void {
    this.title = 'This is: ' + this.config.env + ' he he he';
  }
}
