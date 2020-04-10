import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(private snackBar: MatSnackBar , private router: Router ) { }
  // why snackbar? to show error msg
  // why service? to use it like injection into others . without template syntax or router
  authErrorBox(){
    this.snackBar.open('you muse be logged in','OK',{duration:5000});

    // when user says okay or just msg goes down in 5 sec
    // user shuld be redirected to home,
    // thus listen to action * navigate to home
    return this.snackBar._openedSnackBarRef.onAction().pipe(
      tap( _ => {
        this.router.navigate(['/login']);
      })
     ).subscribe();
  }

}
