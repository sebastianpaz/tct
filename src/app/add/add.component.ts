import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  ngOnInit() {}

  constructor(private main : AppComponent) {}

  addTeam(name : string) {
    this.main.addTeam(name);
  }
}
