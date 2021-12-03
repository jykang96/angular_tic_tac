import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      {{random}}
    </p>
  `,
  styles: []
})
export class SquareComponent {

  // constructor() { }

  // //run code when component is first initialized
  // ngOnInit(): void {
  // }

  random = Math.random();
}
