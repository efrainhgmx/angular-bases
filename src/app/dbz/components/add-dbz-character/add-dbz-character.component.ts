import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-dbz-character.component.html',
  styleUrl: './add-dbz-character.component.css'
})
export class AddDbzCharacterComponent {

    public character: Character = {
      name:'',
      power:0
    }

    emmitCharacter(): void {
      console.log(this.character);
    }
}
