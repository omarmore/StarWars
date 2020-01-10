import { Component, OnInit } from '@angular/core';
import { PeopleService } from "../../service/people.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  
  constructor( 
    private _peopleService:PeopleService
   ) { }

  
  ///arreglo para probar el ng -for en angular
  Pokemon:any = [
    {id:1, nombre:'Bulbasaur', tipo:'Monstruo', poder:226},
    {id:2, nombre:'Ivysaur', tipo:'Monstruo', poder:227},
    {id:3, nombre:'Venusaur', tipo:'Monstruo', poder:228},
    {id:4, nombre:'Charmander', tipo:'Monstruo', poder:229},
    {id:5, nombre:'Charmeleon', tipo:'Monstruo', poder:230},
    {id:6, nombre:'Charizard', tipo:'Monstruo', poder:231},
    {id:7, nombre:'Squirtle', tipo:'Monstruo', poder:232}
  ]
 
  ngOnInit(){
    this._peopleService;
  }



}
