import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class DbzService {
    public characters: Character[] = [
        {
          id: uuid(),
          name: 'Krilin',
          power: 500
        },
        {
          id: uuid(),
          name: 'Goku',
          power: 9500,
        },
        {
          id: uuid(),
          name: 'Vegeta',
          power: 7500,
        },
        {
          id: uuid(),
          name: 'Cell',
          power: 10000,
        },
        {
          id: uuid(),
          name: 'Roshi',
          power: 10,
        },
      ];
    
      onNewCharacter(character: Character): void {
        const newCharacter: Character = { ...character, id: uuid()}
        console.log(newCharacter)
        this.characters.push(newCharacter);
      }
    
      /* onDeletedCharacter(index: number): void {
        this.characters.splice(index, 1);
      } */

      deleteCharacterById(id: string): void {
        if(!id) return;
        
        this.characters = this.characters.filter( character => character.id !== id);
      }
}