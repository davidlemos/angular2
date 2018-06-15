import { Component, OnInit, Input } from '@angular/core';
import { Produto } from './produto'

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  
  @Input() produtos;//@Input decorator que irá receber os dados do componente pai

  constructor() {}

  ngOnInit() {}
}
