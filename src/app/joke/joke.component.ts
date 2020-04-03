import { Component, OnInit,Input } from '@angular/core';
import joke from "../joke";

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html'
})
export class JokeComponent implements OnInit {

  @Input("joke")
  joke:joke;
  
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
