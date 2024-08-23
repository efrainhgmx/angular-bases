import { Component } from "@angular/core";

@Component({
    selector:'app-counter-component',
    template:`<h1>{{ title }}</h1>
    <h2>Counter: {{ counter }}</h2>
    
    <button class="btn btn-primary mx-2" (click)="increaseBy(1)">+1</button>
    <button class="btn btn-primary mx-2"  (click)="resetCounter()">Reset Counter</button>
    <button class="btn btn-primary mx-2"  (click)="decreaseBy(1)">-1</button>`
})
export class CounterComponent{
    public title: string   = 'Hello World';
    public counter: number = 10;
  
    public increaseBy( value: number ):void {
      this.counter += value;
    }
  
    public decreaseBy( value: number):void {
      this.counter -= value;
    }
  
    public resetCounter():void {
      this.counter = 10;
    }


}