import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares: any[] ;
  xIsNext: boolean | undefined;
  winner: string | undefined | null;

  constructor() { }

  ngOnInit() {
    this.newGame();
  }

  newGame(){
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  //if x is true, the next player will be O
  get player(){
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number){
    if(!this.squares[idx]){
      this.squares?.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
  }


}
