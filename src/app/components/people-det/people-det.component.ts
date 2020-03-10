import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PeopleService } from "../../service/people.service";


@Component({
  selector: 'app-people-det',
  templateUrl: './people-det.component.html',
  styleUrls: ['./people-det.component.css']
})
export class PeopleDetComponent  {

  people:any = [];
  
  constructor( private activateRouter:ActivatedRoute,
               public _peopleService:PeopleService
    ) { 
      
    this.activateRouter.params.subscribe(
      params => {
        console.log(params['id']);
        this.people =  _peopleService.getPeoples(params['id']);
        console.log(this.people);
    })
  } 



}
