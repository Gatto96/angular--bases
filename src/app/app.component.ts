import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hola, mi Rey!';

  public counter: number= 7;

  increaseBy(value:number):void {
    this.counter +=value

  }
  resetbtn(){
    this.counter=7;
  }



}
