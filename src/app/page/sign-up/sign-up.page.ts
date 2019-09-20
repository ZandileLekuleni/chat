import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import *as  firestore from "firebase";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  email:string;
  pwd:string;
  username:string;
  bio:string;
  gender:string;

  constructor(public nav: NavController, public af: AngularFireAuth,public fs: AngularFirestore ) { }


  ngOnInit() {
  }

signup() {
  this.af.auth.createUserWithEmailAndPassword(this.email,this.pwd).then(()=>{
    localStorage.setItem('userid', this.af.auth.currentUser.uid);
    this.fs.collection('users').doc(this.af.auth.currentUser.uid).set({
      displayName:this.username,

      bio: this.bio,
      gender: this.gender,

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
tabs(){
   this.nav.navigateForward('/login');
  
}
}
