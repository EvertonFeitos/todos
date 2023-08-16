import { Component } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import auth from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  //Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider())
  }

  //Auth logic to run  auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  login() {
    this.GoogleAuth();
  }
}
