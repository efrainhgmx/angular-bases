import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-dbz-character.component.html',
  styleUrl: './add-dbz-character.component.css'
})
export class AddDbzCharacterComponent {

    @Output()
    public onNewCharacter: EventEmitter<Character> = new EventEmitter();

    //* Las propiedades se pueden inicializar al momento de 
    //* definirlas o en el contructor
    public character: Character = {
      name:'',
      power:0
    }

    emmitCharacter(): void {
      console.log(this.character);
      if( this.character.name.length === 0) return;

      this.onNewCharacter.emit(this.character);
    }
}
