import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  tab1: string ="ChatPage";
  tab2: string ="ProfilePage";
  tab3: string ="UserPage";

  uid:any;
  users:any;
   constructor(public nav:NavController, public user:UserService,public af:AngularFireAuth,public firebase:AngularFirestore,private route: Router) {
         this.users=firebase.collection('users').valueChanges();
         this.uid=af.auth.currentUser.uid;
   }
   ngOnInit() {
   }
   message(key){
     this.route.navigate(['/chats'] ,{ queryParams :{displayName: key.displayName , userid: key.uid}})
   }
   
  }
  
