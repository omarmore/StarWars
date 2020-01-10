import { Injectable, OnInit } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
import { Observable } from 'rxjs';



@Injectable({
  providedIn: "root"
})
export class PeopleService implements OnInit {



  constructor(protected http:HttpClient) { 
    this.getJSON().subscribe(data=>{
      console.log(data)
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/img/people.json");
  }

  getPeople(){    
      return this.http.get('https://randomuser.me/api/?results=25');
  }



  ngOnInit(){

  }


}

