import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";


@Injectable({
  providedIn: "root"
})
export class PeopleService {
  UrlSW = 'https://swapi.co/api/starships/9';
  constructor(protected http:HttpClient) { }

  getPeople(){    
      return this.http.get('https://randomuser.me/api/?results=25');
  }

  getPeople2(){
    return this.http.get(`${this.UrlSW}/`);
  }



 
  
}

