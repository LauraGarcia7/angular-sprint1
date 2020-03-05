import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solucion',
  templateUrl: './solucion.component.html',
  styleUrls: ['./solucion.component.css']
})
export class SolucionDeProblemasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   myFunc(){
    console.log("function called");
    alert('Correcto');
  }
  Incorrecto(){
    alert('InCorrecto');
  }
}