import { Component, OnInit } from '@angular/core';

import {AppComponent} from "../app.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private main : AppComponent) { }

  teams : string[] = this.main.teams;

  ngOnInit() {}

  delTeam(name) {
    this.main.delTeam(name);
  }
}
