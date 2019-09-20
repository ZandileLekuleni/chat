
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import * as firebase from 'firebase';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

text: string;
chatRef: any;

  navCrtl: any;
  uid: string;
 


  tab1: string ="ChatPage";
  tab2: string ="ProfilePage";
  tab3: string ="UserPage";
  id: string;
  ref: any;
  uploadState: any;
  downloadURL: any;
 
  

  constructor(public af: AngularFireAuth, public fs: AngularFirestore,private storage: AngularFireStorage) {
this.uid = localStorage.getItem('userid');
    // this.uid=this.af.auth.currentUser.uid;
    this.chatRef =
    this.fs.collection('chat',ref=>ref.orderBy('Timestamp')).valueChanges();
  console.log(this.uid)
  }
// addbuddy() {
//   this.fs.collection('Add-FriendPage');
// }
send(){
if(this.text != ''){
  this.fs.collection('chat').add({
    Name: this.af.auth.currentUser.displayName,
    Message: this.text,
    UserID: this.af.auth.currentUser.uid,
    Timestamp:firebase.firestore.FieldValue.serverTimestamp(),
  });
  this.text='';
}
}

upload(event) {
  const file= event.target.files[0];
 this.id = Math.random().toString(36).substring(2);
const filepath=this.id;
this.ref = this.storage.ref(filepath);
const task = this.storage.upload(filepath, file);
this.uploadState = task.percentageChanges();
task.snapshotChanges().pipe(
  finalize(() => {
    this.downloadURL = this.ref.getDownloadURL().subscribe(url=>{
       console.log(url);
      this.fs.collection('chats').add({
        Name: this.af.auth.currentUser.displayName,
        photoURL:url,
        UserID: this.af.auth.currentUser.uid,
        sendTo:this.send,
        Timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        });
     })
   })
 ).subscribe();
}

  ngOnInit() {
  }

}
