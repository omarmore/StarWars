import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PeopleService } from "../../service/people.service";


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

people:any[] = [];

  constructor(private activatedRouter:ActivatedRoute,
              private _personService:PeopleService,
              private router:Router
    ) { 

   }

  ngOnInit() {
    this.activatedRouter.params.subscribe( params =>{
      console.log(params['termino']);
      this.people = this._personService.buscarPeople(params['termino']);
      
      console.log(this.people);
    })
  }
 
  verPeople(idx:number){
    this.router.navigate(['/people-def',idx]);
  }

}
