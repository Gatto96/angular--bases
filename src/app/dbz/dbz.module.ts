import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { MainPageComponent } from './pages/main-pages.component';
import { CharacterComponent } from './components/character/character.component';



@NgModule({
  declarations: [

    ListComponent,
    MainPageComponent,
    CharacterComponent
  ],
  exports: [

    MainPageComponent

  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
