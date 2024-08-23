import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { MainPageComponent } from './pages/main-pages.component';



@NgModule({
  declarations: [

    ListComponent,
    MainPageComponent
  ],
  exports: [

    ListComponent,
    MainPageComponent

  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
