import {Component, OnInit, ViewChild} from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {


  constructor(private main : AppComponent) { }

  teams : string[] = this.main.teams;
  fixture : any[];

  ngOnInit() {}

  generate() {
    this.main.generate();
    this.fixture = this.main.fixture;

    console.log(this.fixture)
  }
}
