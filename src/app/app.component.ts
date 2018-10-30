import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fixture Generator';


  //Inicializo arreglo de strings vacío que contendrá los equipos
  teams : string[];

  constructor() {
    this.teams = [];
  }

  /*
 *   Agrega el nombre del equipos al arreglo de equipos.
 *
 */
  addTeam(name) {
    this.teams.push(name);
  }

  delTeam(name) {
    let index = this.teams.indexOf(name);
    if (index > -1) {
      this.teams.splice(index, 1);
    }
  }
}
