import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {
  cantidad:number;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;

  monedas: string[] = ['USD', 'EUR', 'COP']
  convertir(){
    switch(this.tengo){
      case 'USD':
        if(this.quiero === 'USD'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 1.02
        }
        if(this.quiero === 'COP'){
          this.total = this.cantidad *4500
        }
        break;
      case 'EUR':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 0.98
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad
        }
        if(this.quiero === 'COP'){
          this.total = this.cantidad *4450
        }
        break;
      case 'COP':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 0.00022
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.00022
        }
        if(this.quiero === 'COP'){
          this.total = this.cantidad
        }
        break;
    }

  }


  constructor() { }

  ngOnInit(): void {
  }

}
