import { Component, OnInit } from '@angular/core';

interface mensagem {
  id: String | number,
  texto: String
}

let lista:mensagem[]=[];

@Component({
  selector: 'app-seletorv2',
  templateUrl: './seletorv2.component.html',
  styleUrls: ['./seletorv2.component.css']
})

export class Seletorv2Component implements OnInit {

lista: mensagem []= [{id:'13', texto:'Décimo terciro teste'},
         {id: '4', texto:'Quarto teste'},
         {id: '1', texto:'Primiro teste'},
         {id: '8', texto:'Oitavo teste'},
         {id: '35', texto:'Trigésimo quinto teste'},
         {id: '4', texto:'Quarto teste pela segunda vez'},
         {id: '2', texto:'Segundo teste'}];

  constructor() {}

  ngOnInit(): void {

        this.lista = this.lista.map(function(item){
        return {
               id: isNaN(Number(item.id)) ? item.id:Number(item.id),
               texto: item.texto
               }
    });
  }
}
