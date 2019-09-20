import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService  {
   private userDoc: AngularFirestoreDocument<User>;
  fs: any;
  
   constructor(private angularfire:AngularFirestore) { }
   getUser(key)
   {
     // return this.angularfire.collection('users/'+ key).valueChanges();
     this.userDoc = this.angularfire.doc<User>('users/'+key);
     return this.userDoc.valueChanges();
   }
   getUsers(){
     return this.angularfire.collection('users').snapshotChanges();
   }
   update(User, key)
   {
  this.userDoc = this.angularfire.doc<User>('users/'+key);
     this.userDoc.update(User);
   }
   
  
  }
  
// this.fs.collection() {
//     const promise = new Promise((resolve, reject) => {
//       this.firedata.orderByChild('uid').once('value', (snapshot) => {
//         let userdata = snapshot.val();
//         let temparr = [];
//         for (var key in userdata) {
//           temparr.push(userdata[key]);
//         }
//         resolve(temparr);
//       }).catch((err) => {
//         reject(err);
//       })
//     })
//     return promise;
//   }