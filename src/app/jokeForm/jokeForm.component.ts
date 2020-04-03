import {Component,Output,EventEmitter} from '@angular/core'

import joke from "../joke"
@Component({
    selector:"joke-form",
    templateUrl:"./jokeForm.component.html"
})
 export class jokeForm {
    
    @Output('newjoke')
    newjoke:EventEmitter<joke>;

    constructor(){
        this.newjoke = new EventEmitter<joke>();
    }
  

  addJoke(caption:string,punchline:string){
      this.newjoke.emit(new joke(caption,punchline)); 
  }

}

