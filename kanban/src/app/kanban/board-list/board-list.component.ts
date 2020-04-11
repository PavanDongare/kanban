import { BoardService } from './../board.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Board } from '../board.model';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit , OnDestroy{

  constructor(private boardService : BoardService) { }
  boards: Board [];
  sub: Subscription;



  ngOnInit(): void {
    this.sub = this.boardService.getUserBoards().subscribe(boards=> (this.boards = boards));
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
