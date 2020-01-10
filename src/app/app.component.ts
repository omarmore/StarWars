import { Component, OnInit } from '@angular/core';
import { PeopleService } from "./service/people.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'demo131';
  users: any[] = [];
  //title = 'clientes-app';
  tituloPokemon ='pikachu';


  constructor(
    //protected userService: PeopleService
  ) {
  }

  ngOnInit() {
  }
}
