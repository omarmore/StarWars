import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  
  constructor(private router:Router) { };
   Lenguajes:String[] = ['Spring','Angular','Java','TypeScript '] ;
 
  buscarPersonaje(termino:string) {

    console.log(termino);
    this.router.navigate(['/buscar',termino])
  }
   
 

}


