import { Injectable, OnInit, ɵConsole } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

import { Observable } from 'rxjs';



@Injectable({
  providedIn: "root"
})
export class PeopleService implements OnInit {

    info:any = [];
    cargada:boolean = false;

 constructor(public http:HttpClient){
    this.http.get("./assets/img/people.json")
    .subscribe(data =>{
      console.log(data );
      this.cargada = true;
      this.info = data;
      
    })
  }



  getPeople(){    
      return this.http.get('https://randomuser.me/api/?results=25');
  }


  getPeoples(idx:string){
    return this.info[idx];
    console.log('Aqui estoy')
    //console.log(this.info[idx]);
  }


/**Omar recordar que las funciones deben retornar el valos que espera en metodo cuando lo llaman
 * por que al ser llamanda el metodo, esté no devolvera un valor indefinido por que no reconoce nada de regreso
 */

 buscarPeople(termino:string){
   
    let  personArr:string[] = [];
    termino = termino.toLowerCase();
    for(let i = 0; i < this.info.length; i++ ){

      let person = this.info[i];
      let name = person.name.toLowerCase();

      if( name.indexOf(termino) >= 0 ){
        person.idx = i;
        console.log(person);
        personArr.push(person);
      }

    }
    return personArr;
 }

  ngOnInit(){

  }


}

