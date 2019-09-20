

// import { Injectable } from '@angular/core';
// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
// import * as firebase from 'firebase';
// @Injectable({
// providedIn: 'root'
// })
// export class UsersService {
//   getallusers() {
//     throw new Error("Method not implemented.");
//   }
//   updateimage(imgurl: string) {
//     throw new Error("Method not implemented.");
//   }
// private userDoc: AngularFirestoreDocument<User>;
// constructor(private angularfire:AngularFirestore) { }
// getUser(key)
// {
//   // return this.angularfire.collection('users/'+ key).valueChanges();
//   this.userDoc = this.angularfire.doc<User>('users/'+key);
//   return this.userDoc.valueChanges();
// }
// update(User, key)
// {
//    this.angularfire.doc<User>('users/'+key);
//   this.userDoc.update(User);
// }
// }


// import { Injectable } from '@angular/core';
// import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
// @Injectable({
//  providedIn: 'root'
// })
// export class UsersService {
//  private userDoc: AngularFirestoreDocument<User>;
//  constructor(private angularfire:AngularFirestore) { }
//  getUser(key)
//  {
//    // return this.angularfire.collection('users/'+ key).valueChanges();
//    this.userDoc = this.angularfire.doc<User>('users/'+key);
//    return this.userDoc.valueChanges();
//  }
//  update(User, key)
//  {
//     this.angularfire.doc<User>('users/'+key);
//    this.userDoc.update(User);
//  }
// }



// import { Injectable } from '@angular/core';
// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
// import { User } from 'firebase';

// @Injectable({
//  providedIn: 'root'
// })
// export class UsersService {
//  private userDoc: AngularFirestoreDocument<User>;

//  constructor(private angularfire:AngularFirestore) { }
//  getUser(key)
//  {
//    // return this.angularfire.collection('users/'+ key).valueChanges();
//    this.userDoc = this.angularfire.doc<User>('users/'+key);
//    return this.userDoc.valueChanges();
//  }
//  getUsers(){
//    return this.angularfire.collection('users').snapshotChanges();
//  }
//  update(User, key)
//  {
// this.userDoc = this.angularfire.doc<User>('users/'+key);
//    this.userDoc.update(User);
//  }
 

//  }