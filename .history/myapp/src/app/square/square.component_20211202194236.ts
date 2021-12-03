import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
    <button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent {

  // // will change the random value by Math.random() every .5 seconds.
  // constructor() { 
  //   setInterval(() => this.random = Math.random(), 500)
  // }

  // // //run code when component is first initialized
  // // ngOnInit(): void {
  // // }

  // random = Math.random();

  @Input() value: 'X' | 'O' | undefined;
}
