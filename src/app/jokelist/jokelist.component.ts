import {Component} from "@angular/core"
import joke from "../joke"

@Component({
    selector:'joke-list',
    templateUrl:'./jokelist.component.html'
})
export  class jokelist{

jokes:joke[];

constructor(){
    this.jokes = [
        new joke('Why did David Hasselhoff change his name to “The Hoff?','It’s less hassle.'),
        new joke('Why does Waldo wear stripes?','Because he doesn’t want to be spotted.')
    ];
}

addjoke(joke:any){
    
    this.jokes.push(joke);
}

}

