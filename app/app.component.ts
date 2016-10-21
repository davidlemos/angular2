import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'app/views/home.html'
})

export class AppComponent {
    title:string;

    constructor(){
        this.title = "Blank Project"
    }
}
