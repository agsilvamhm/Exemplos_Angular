import { Component, OnInit } from '@angular/core';

interface mensagem {
  id: String,
  texto: String
}

interface mensagemFormatada {
  id: Number,
  texto: String
}

@Component({
  selector: 'app-seletorv2',
  templateUrl: './seletorv2.component.html',
  styleUrls: ['./seletorv2.component.css']
})

export class Seletorv2Component implements OnInit {

listaFormatada: mensagemFormatada[]=[];

lista:mensagem[] = [{id:'13', texto:'Décimo terciro teste'},
          {id: '4', texto:'Quarto teste'},
          {id: '1', texto:'Primiro teste'},
          {id: '8', texto:'Oitavo teste'},
          {id: '35', texto:'Trigésimo quinto teste'},
          {id: '4', texto:'Quarto teste pela segunda vez'},
          {id: '2', texto:'Segundo teste'}
                      ];

  constructor() {}

  ngOnInit(): void {
    this.converter();
  }

 converter(): void{
    for(let i=0; i < this.lista.length; i++){
        var objeto:mensagemFormatada = {
          id: Number(this.lista[i].id),
          texto: this.lista[i].texto
        };
        this.listaFormatada.push(objeto);
     }
   }
}
