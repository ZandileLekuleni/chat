


import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import *as  firestore from "firebase";
@Component({
 selector: 'app-register',
 templateUrl: './register.page.html',
 styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username:string;
  displayName: string;
  email:string;
  // gender: string;
  // bio: string;
  password:string;

 constructor(public nav: NavController, public af: AngularFireAuth,public fs: AngularFirestore ) { }
 ngOnInit() {
 }
register() {
 this.af.auth.createUserWithEmailAndPassword(this.email,this.password).then(()=>{
   localStorage.setItem('userid', this.af.auth.currentUser.uid);
   this.fs.collection('users').doc(this.af.auth.currentUser.uid).set({
     displayName:this.displayName,
    //  gender:this.gender,
    //  bio:this.bio,
     uid: this.af.auth.currentUser.uid,
     Timestamp:firestore.firestore.FieldValue.serverTimestamp(),
     Email:this.email,
     photoURL:''
   }).catch(error=>{
     alert(error.message)
   })
   this.af.auth.currentUser.updateProfile({
     displayName: this.username,
     




     photoURL: ''
   }).then (()=>{
     this.nav.navigateRoot('login');
 }).catch(error=>{
   alert(error.message)
 })
}).catch(error =>{
 alert(error.message)
})
}
home(){
  this.nav.navigateForward('/home');
}
}


  
