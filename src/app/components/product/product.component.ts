import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

let myObj = {
  "nev": "Triban országúti RC 100",
  "leiras": "Kerékpár kezdőknek: Széles gumiköpeny, egyszerűsített váltás, egytányér, hajlított kormány.Sík, vagy enyhén emelkedős terepre ideális.",
  "tipus": "ORSZAGUTI",
  "meret": 21,
  "sebessegElol": 3,
  "sebessegHatul": 7,
  "szin": "fekete",
  "fek": "Tektro RL 340 fékkar",
  "teleszkop": "nincs",
  "vaz": "6061 alumínium váz",
  "keszlet": 5,
  "nettoAr": 99990
	}
