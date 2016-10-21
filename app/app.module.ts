import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { HomeComponent }   from './app.home.component';
import { AppComponent }   from './app.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [HomeComponent, AppComponent],
    bootstrap: [HomeComponent]
})

export class AppModule {}