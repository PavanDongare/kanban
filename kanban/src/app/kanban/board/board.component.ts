import { BoardService } from './../board.service';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Board } from '../board.model';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardComponent implements OnInit {
  @Input() board: Board;
  constructor(private boardService: BoardService) { }


  taskDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.board.tasks, event.previousIndex, event.currentIndex);
    this.boardService.updateTask(this.board.id,this.board.tasks);
  }


  ngOnInit(): void {
  }

}
