import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public realName: string= 'Tony Stark'
  public name: string ='IronMan'
  public age: number =45;


  get capitalizedName() : string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changenHero():void{

    this.name="Batman"
    this.realName="Bruce Wayne"

  }

  changenAge():void{

    this.age=26

  }

}
