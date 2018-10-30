import {Component, OnInit, ViewChild} from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {

  @ViewChild('btnGenerar') btnGenerar;


  constructor(private main : AppComponent) { }

  ngOnInit() {
      if(this.main.teams.length >= 4)
        this.btnGenerar.enabled = true;
      else
        this.btnGenerar.enabled = false;
  }

}
