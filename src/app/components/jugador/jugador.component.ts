import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {
@Input() nombre:string = "jugador anonimo";

  constructor() { }

  ngOnInit() {
  }

}
