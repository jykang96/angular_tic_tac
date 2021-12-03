import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton>{{value}}</button>
  `,
  styles: []
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
