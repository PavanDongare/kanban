import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from '@firebase/app';// import core firebase client (required)
import '@firebase/auth'; // import Firebase Authentication (optional)
import '@firebase/database'; // import Firebase Realtime Database (optional)
import '@firebase/firestore'; // import Cloud Firestore (optional)

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  constructor(private authService: AngularFireAuth) { }

  @HostListener('click')
  onclick(){
    this.authService.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
     // this.authService.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

}
