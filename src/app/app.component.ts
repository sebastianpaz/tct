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
  fixture : any[];


  constructor() {
    this.teams = [];
    this.fixture = [];
  }


  //Agrega el nombre de equipo al arreglo de equipos.
  addTeam(name) {
    if(name)
      this.teams.push(name);
  }

  //Elimina un equipo con nombre 'name' que se asume existe en el arreglo.
  delTeam(name) {
    let index = this.teams.indexOf(name);
    if (index > -1) {
      this.teams.splice(index, 1);
    }
  }

  /*
      Genera el fixture
   */
  generate() {
    this.fixture = this.generateFixture(this.teams.length);
  }


  round(n, j) {
    let m = n - 1;
    let round = Array.from({length: n}, (_, i) => (m + j - i) % m);
    round[round[m] = j * (n >> 1) % m] = m;
    return round;
  }

  generateFixture(n) {
    let rounds = Array.from({length: n - 1}, (_, j) => this.round(n, j));
    return Array.from({length: n}, (_, i) => ({
      id: this.teams[i],
      matches: rounds.map(round => this.teams[round[i]])
    }));
  }
}
