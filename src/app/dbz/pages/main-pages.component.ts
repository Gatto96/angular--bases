import { Character } from '../interfaces/character.interface';
import { Dbzservice } from './../services/DBZ.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: 'main-pages.component.html'
})

export class MainPageComponent  {

constructor(private Dbzservice:Dbzservice){}

get characters(): Character[]{
  return [...this.Dbzservice.characters];
}

onDeletCharacter (id:string):void{
  this.Dbzservice.deleteCharacterById(id)
}

onNewCharacter(character:Character){
  this.Dbzservice.addCharacter(character)
}

}
