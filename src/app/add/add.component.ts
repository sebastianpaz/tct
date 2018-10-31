import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  ngOnInit() {}

  input : string = null;

  constructor(private main : AppComponent) {}

  addTeam(name : string) {
    this.input = "";
    this.main.addTeam(name);
  }
}
