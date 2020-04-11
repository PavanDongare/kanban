import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanRoutingModule } from './kanban-routing.module';
import { FormsModule } from '@angular/forms';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardComponent } from './board/board.component';
/*
 when do we need feature module? mainly if lazy loaded component
 why shared module? it is used in all, so add to all feature modules

*/
@NgModule({
  declarations: [BoardListComponent, BoardComponent],
  imports: [
    CommonModule,
    KanbanRoutingModule,
    SharedModule,
    FormsModule,
    DragDropModule,
    MatButtonToggleModule,
    MatDialogModule
  ],
  exports: [BoardComponent]
})
export class KanbanModule { }
