import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  @Input() valor:string = "";
  @Input() familia:string = "";
  @Input() bocaArriba:boolean = false;
  ruta:string;
  constructor() { }

  ngOnInit() {
    if(this.bocaArriba){
      this.ruta = `assets/img/carta_img/${this.valor}${this.familia}.png`; 
    }else{
      this.ruta = `assets/img/carta_img/purple_back.png`; 
    }
  }

}
