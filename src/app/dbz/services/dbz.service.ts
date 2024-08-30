import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
    providedIn: 'root'
})
export class DbzService {
    public characters: Character[] = [
        {
          name: 'Krilin',
          power: 500,
        },
        {
          name: 'Goku',
          power: 9500,
        },
        {
          name: 'Vegeta',
          power: 7500,
        },
        {
          name: 'Cell',
          power: 10000,
        },
        {
          name: 'Roshi',
          power: 10,
        },
      ];
    
      onNewCharacter(character: Character): void {
        this.characters.push(character);
      }
    
      onDeletedCharacter(index: number): void {
        this.characters.splice(index, 1);
      }
}