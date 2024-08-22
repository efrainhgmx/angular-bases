import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number  = 45;


  //? Un getter es una función pero puede ser utilizada como una propiedad de la clase
  get capitalizeName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`
  }

  changeHero():void {
    this.name = 'spiderman';
  }

  changeAge():void {
    this.age = 19;
  }

  resetHero():void {
    this.name = 'ironman';
    this.age = 45;
  }

}
