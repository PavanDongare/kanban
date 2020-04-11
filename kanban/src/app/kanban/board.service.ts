import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Board, Task } from './board.model';
import * as firebase from 'firebase';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private afAuth: AngularFireAuth, private db : AngularFirestore) { } // firestore gives db access


  /*
    api: create board, delete baord, add card, updateboard
  */


  async createBoard(data : Board){
    const user = await this.afAuth.currentUser;
    return this.db.collection('board').add({
      ...data,
      uid: user.uid,
      tasks: [{description: 'hello', label: 'yellow'}]
    }) ;
  }

  deleteBoard(boardId: string) {
    return this.db.collection('board').doc(boardId).delete();
  }


  updateTask(boardId: string, tasks: Task[]){
    return this.db.collection('board').doc(boardId).update({tasks});
  }

  removeTask(boardId: string, task: Task){
    return this.db
              .collection('board')
              .doc(boardId)
              .update({tasks: firebase.firestore.FieldValue.arrayRemove(task)});
  }


  getUserBoards(){
    return this.afAuth.authState.pipe(
      switchMap( user =>{
            if(user){
              return this.db
                    .collection<Board>
                    ( 'board', ref =>
                      ref.orderBy('priority')
                    ).valueChanges({idField:'id'});
            }else {
              return [];
            }
        }
      )
    )
  }

  sortBoards(boards: Board[]) {
    const db = firebase.firestore();
    const batch = db.batch();
    const refs = boards.map(b => db.collection('board').doc(b.id));
    refs.forEach((ref, idx) => batch.update(ref, { priority: idx }));
    batch.commit();
  }




}// boardservice end
