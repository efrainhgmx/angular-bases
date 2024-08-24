import { Component  } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.html'
})

export class MainPageComponent  {
   public characters: Character[] = [
    {
        name: 'Krilin',
        power: 500
    },{
        name: 'Goku',
        power: 9500
    },{
        name: 'Vegeta',
        power: 7500
    },{
        name: 'Cell',
        power: 10000
    },{
        name: 'Roshi',
        power: 10
    }
   ];
}