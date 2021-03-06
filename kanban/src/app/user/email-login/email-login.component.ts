import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailLoginComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private fb: FormBuilder) { }

  form : FormGroup;
  type : 'login' | 'signup' | 'reset' = 'signup' ;
  loading = false;

  serverMessage = ' auth fail';


  ngOnInit(): void {
    this.form = this.fb.group({
      email : ['', [Validators.required, Validators.email] ],
      password: ['', [Validators.required, Validators.email] ],
      passwordConfirm:['']
    });
  }

  changeType(val){ return this.type = val; }
  get isLoggIn(){ return (this.type === 'login'); }
  get isSignUp(){ return this.type === 'signup'; }
  get isPasswordReset(){return this.type === 'reset'; }

  get password(){ return this.form.get('password'); }
  get email(){ return this.form.get('email'); }
  get passwordConfirm(){ return this.form.get('passwordConfirm'); }

  get isPasswordMatched(){
    if(this.type !== 'signup') { return true; }
    else {
      return this.password.value ===  this.passwordConfirm.value;
    }

  }

  async onSubmit(){
        this.loading = true;
        const email = this.email.value; // we can access this.email instead of this.form.email because of the getter method
        const password =  this.password.value ;
        try {
            if (this.isLoggIn) { await this.afAuth.signInWithEmailAndPassword(email,password);}
            if(this.isSignUp) { await this.afAuth.createUserWithEmailAndPassword(email,password);}
            if(this.isPasswordReset) { await this.afAuth.sendPasswordResetEmail(email);}
        }
        catch(err) {  this.serverMessage = err; }
        this.loading = false;
  }


}
