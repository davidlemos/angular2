import { Component, OnInit, ViewChild } from '@angular/core';
import {Produto} from '../produtos/produto';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  @ViewChild('prodForm') prodForm;//instancia do form

  produto:Produto;//referenciado lá no form

  produtos:Array<Produto> = new Array<Produto>();

  msg:string;

  constructor() {
    this.produto = new Produto("","");
  }

  ngOnInit() {
  }

  onSubmit(){
    if(this.prodForm.valid){//usando validações do form
      this.produtos
          .push(new Produto(this.produto.nome,this.produto.detalhes))
      this.prodForm.reset();//usando o mecanismo de reset do form
    }
  }
}
