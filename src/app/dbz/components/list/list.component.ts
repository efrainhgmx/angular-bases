import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  onDeleteIndex: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index: number):void {
    const characterId: string = this.characterList[index].id || '';
    this.onDeleteIndex.emit(characterId);
  }

 }
