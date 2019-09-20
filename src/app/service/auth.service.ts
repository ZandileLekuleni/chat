// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   [x: string]: any;
//   login(emailInput: string, passwordInput: string) {
//     throw new Error("Method not implemented.");
//   }
//   isUserLoggedIn(): any {
//     throw new Error("Method not implemented.");
//   }
//   logout() {
//     throw new Error("Method not implemented.");
//   }

//   constructor() { }
// }



import { Injectable } from '@angular/core';

import { Router } from "@angular/router";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginWithFb: any;

   constructor(
    public angularFireAuth: AngularFireAuth,
    public router: Router
  ) {
    this.angularFireAuth.authState.subscribe(userResponse => {
      if (userResponse) {
        localStorage.setItem('user', JSON.stringify(userResponse));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }
 
 
  async login(email: string, password: string) {
    return await this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }
 
  async register(email: string, password: string) {
    return await this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
  }
 
  async sendEmailVerification() {
    return await this.angularFireAuth.auth.currentUser.sendEmailVerification();
  }
 
  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.angularFireAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  }
 
  async logout() {
    return await this.angularFireAuth.auth.signOut();
  }
 
 
  isUserLoggedIn() {
    return JSON.parse(localStorage.getItem('user'));
  }
 
  async  loginWithGoogle() {
    return await this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
  }
 
}

