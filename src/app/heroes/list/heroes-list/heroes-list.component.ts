import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css'
})
export class HeroesListComponent {

  public heroesNames: string[] = ['Hulk', 'Spiderman', 'Thor', 'Captain America'];
}
