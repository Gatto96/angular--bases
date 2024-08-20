import { Component } from "@angular/core";



@Component({
  selector:'app-counter',
  template:`

      <h3>Conunter: {{counter}}</h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetbtn()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
    <hr>
  `
})
export class CounterComponent {

  public counter: number= 7;

  increaseBy(value:number):void {
    this.counter +=value

  }
  resetbtn(){
    this.counter=7;
  }
}
