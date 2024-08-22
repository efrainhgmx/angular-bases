import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css'
})
export class HeroesListComponent {

  public heroesNames: string[] = ['Hulk', 'Spiderman', 'Thor', 'Captain America', 'Black Panther', 'Black Widow'];
  public deteledHero?: string;

  removeLastHero():void {
   this.deteledHero =  this.heroesNames.pop();
  }
}
