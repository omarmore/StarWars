import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-people-tarjeta',
  templateUrl: './people-tarjeta.component.html',
  styleUrls: ['./people-tarjeta.component.css']
})
export class PeopleTarjetaComponent implements OnInit {

  @Input() people: any = {};
  @Input() indice: number;

  @Output() personSeleccionado:EventEmitter<number>;

  constructor(
    private router:Router
  ) {
    this.personSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verPeople(){
    //this.personSeleccionado.emit(this.indice)
    console.log("Hi"+this.indice);
    this.router.navigate(['/people-def',this.indice])
  }

}
