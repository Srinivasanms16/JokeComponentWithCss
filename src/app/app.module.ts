import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { JokeComponent } from './joke/joke.component';
import {jokelist} from './jokelist/jokelist.component';
import {jokeForm} from './jokeForm/jokeForm.component';
import { title } from './title/tite.component'



@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    jokeForm,
    jokelist,
    title
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
