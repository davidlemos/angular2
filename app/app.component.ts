import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: 'app/views/home.html'
})

export class AppComponent {
    nome:string;

    constructor(){
        this.nome = 'Blank Project';
    }
}
