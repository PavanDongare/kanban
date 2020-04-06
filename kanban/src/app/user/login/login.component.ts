import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor(public authService: AngularFireAuth) { }

  ngOnInit(): void {
  }

}
