import { Component, OnInit } from '@angular/core';

interface produto {
  id: number,
  nome: String,
  preco: number
}

@Component({
  selector: 'app-seletor',
  templateUrl: './seletor.component.html',
  styleUrls: ['./seletor.component.css']
})
export class SeletorComponent implements OnInit {

  produtos: produto[] = [
    { id: 1, nome: 'Melancia', preco: 2.5 },
    { id: 2, nome: 'Abacate',  preco: 10.0},
    { id: 3, nome: 'Banana',   preco: 3.4 },
    { id: 4, nome: 'Laranja',  preco: 3.3 },
    { id: 5, nome: 'Coco',     preco: 1.5 },
    { id: 6, nome: 'Maça',     preco: 8.0 }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
