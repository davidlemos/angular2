import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  newTitle = 'new Title';
  minhaClass = '';

  add(){
    this.newTitle = 'Added';
    this.minhaClass = 'minhaClass';
  }
}
