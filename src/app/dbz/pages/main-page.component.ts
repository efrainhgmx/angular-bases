import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.html',
})
export class MainPageComponent {
  /** *
   * Los servicios debe inyectarse de manera privada como una buena práctica
   * Ya que dejarlos publicos, puede dejar expuesto 
   * al service en otras partes donde se use el componente y llevar a comportamientos no
   * deseados
   */
 constructor(
    private dbzService: DbzService
 ) {}

 get characters(): Character[] {
  return [...this.dbzService.characters];
 }

 onDeleteCharacter(id: string):void{
  this.dbzService.deleteCharacterById(id);
 }

 onNewCharacter(character: Character):void {
  this.dbzService.addCharater(character);
 }
}
