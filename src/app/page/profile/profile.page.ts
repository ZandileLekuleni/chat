// import { Component, OnInit } from '@angular/core';
// import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFireStorage } from '@angular/fire/storage';
// import {finalize} from 'rxjs/operators';

// import { UsersService } from 'src/app/service/users.service';
// import { Router } from '@angular/router';
// import * as firebase from 'firebase';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.page.html',
//   styleUrls: ['./profile.page.scss'],
// })
// export class ProfilePage implements OnInit {

//   ref;
// task: any;
// uploadState: any;
// uploadProgress: any;
// downloadURL: any;
// id;
// name;
// username;
// gender;
// bio;
// url
// user: AngularFirestoreDocument;
// sub;
// photoURL:any;




// constructor(private userServ: UsersService,
//   private router: Router,
//   private afAuth: AngularFireAuth,
//  private angularfire:AngularFirestore,
  
//   public Storage: AngularFireStorage , private  af: AngularFireAuth, private afs :AngularFirestore) {
//   this.af.auth.currentUser.photoURL;
//   this.name=af.auth.currentUser.displayName;
//   // this.username=af.auth.currentUser.userName;
//   // this.gender=af.auth.currentUser.gender;
//   // this.bio=af.auth.currentUser.bio;
//   this.user=afs.doc(`users/${this.af.auth.currentUser.uid}`)
//   this.sub=this.user.valueChanges().subscribe(event=>{
//   this.photoURL = event.photoURL
//   })

  
//   {
//   const key = this.afAuth.auth.currentUser.uid;
//   this.userServ.getUser(key).subscribe( data =>{
//   console.log(data)
// })
//  }

// }
// ngOnInit() {
// }
// }



import { Component, OnInit } from '@angular/core';
import {finalize} from 'rxjs/operators';
import {  AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
 selector: 'app-profile',
 templateUrl: './profile.page.html',
 styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
//

  User = {
   name: " ",
   username: " ",
   displayName: " ",
   gender: " ",
   bio: " "
   
 }
 
 userList;

ref;
task: any;
uploadState: any;
uploadProgress: any;
downloadURL: any;
id;
name;
url
user: AngularFirestoreDocument;
sub;
photoURL:any;
constructor(public Storage: AngularFireStorage , private  af: AngularFireAuth, private afs :AngularFirestore, private router: Router,private userServ: UserService) {
  this.af.auth.currentUser.photoURL;
  this.name=af.auth.currentUser.displayName;
  this.user=afs.doc(`users/${this.af.auth.currentUser.uid}`)
  this.sub=this.user.valueChanges().subscribe(event=>{
  this.photoURL = event.photoURL
  })
//
  const key = this.af.auth.currentUser.uid;
  this.userServ.getUser(key).subscribe( data =>{
    this.userList = data;
    console.log(data)
  })
}
ngOnInit() {
 const key = this.af.auth.currentUser.uid;
}
//
// name: userList.name, username: userList.username,
onEdit(userList){
 this.router.navigate(['/update-profile'], {queryParams:{ gender: userList.gender, displayName: userList.displayName, bio: userList.bio}})
}
// update(){
//   this.router.navigateByUrl('/update')
// }


upload(event) {
  const file= event.target.files[0];
   this.id = Math.random().toString(36).substring(2);
  const filepath=this.id;
  this.ref = this.Storage.ref(filepath);
  const task = this.Storage.upload(filepath, file);
  this.uploadState = task.percentageChanges();
  task.snapshotChanges().pipe(
    finalize(() => {
      this.downloadURL = this.ref.getDownloadURL().subscribe(url=>{
        console.log(url);
        this.af.auth.currentUser.updateProfile({
          photoURL: url
        })
        this.user.update({
          photoURL: url
        })
      })
    })
  ).subscribe();
}
}














// onEdit(userList){
//   this.router.navigate(['/update-profile'], {queryParams:{name: userList.name}})
// }


// upload(event) {
//   const file= event.target.files[0];
//    this.id = Math.random().toString(36).substring(2);
//   const filepath=this.id;
//   this.ref = this.Storage.ref(filepath);
//   const task = this.Storage.upload(filepath, file);
//   this.uploadState = task.percentageChanges();
//   task.snapshotChanges().pipe(
//     finalize(() => {
//       this.downloadURL = this.ref.getDownloadURL().subscribe(url=>{
//         console.log(url);
//         this.af.auth.currentUser.updateProfile({
//           photoURL: url
//         })
//         this.user.update({
//           // Gender:this.gender,
//           // Bio:this.bio,
//           photoURL: url
//         })
//       })
//     })
//   ).subscribe();
// }
// }





