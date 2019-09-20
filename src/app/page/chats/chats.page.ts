import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {
  text: string;
  chatRef: any;
  uid: string;
  user: any;
  sendto;
  userid
  displayName;
  id: string;
  ref: any;
  uploadState: any;
  downloadURL: any;


  constructor(private storage: AngularFireStorage,private router: Router, private af: AngularFireAuth, private firebase: AngularFirestore, private route: ActivatedRoute) { 
   
    this.uid=this.af.auth.currentUser.uid;
    this.chatRef = this.firebase.collection('chats', ref=>ref.orderBy('Timestamp')).valueChanges();
   


    this.route.queryParams
    .subscribe(params => {
      this.displayName=params.displayName;
      this.sendto=params.userid;
      console.log("user "+ this.sendto);
    });
  }

 


  send(){
    if(this.text != ''){
      this.firebase.collection('chats').add({
        displayName: this.displayName,
        message: this.text,
        userid: this.af.auth.currentUser.uid,
        sendTo: this.sendto,
        Timestamp: Date.now(),
      });
      this.text="";
    
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
        this.firebase.collection('chats').add({
          displayName: this.displayName,
          photoURL:url,
          userid:this.af.auth.currentUser.uid,
          sendTo:this.sendto,
          Timestamp: Date.now(),
          });
       })
     })
   ).subscribe();
 }

  ngOnInit() {
    
   
  }

}
