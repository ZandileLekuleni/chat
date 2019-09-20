// import { Component, OnInit } from '@angular/core';
// import { NavController, NavParams } from '@ionic/angular';
// import { UserService } from 'src/app/service/user.service';

// @Component({
//   selector: 'app-buddies',
//   templateUrl: './buddies.page.html',
//   styleUrls: ['./buddies.page.scss'],
// })
// export class BuddiesPage implements OnInit {
//   ngOnInit(): void {
//     throw new Error("Method not implemented.");
//   }

//   temparr = [];
//   filteredusers = [];

//   constructor(public navCtrl: NavController, public navParams: NavParams,
//               public userservice: UserService) {
//     this.userservice.fs.collection((res: any) => {
//       this.filteredusers = res;
//       this.temparr = res;
//    })
//   }

//   ionViewDidLoad() {

//   }

//   searchuser(searchbar) {
//     this.filteredusers = this.temparr;
//     var q = searchbar.target.value;
//     if (q.trim() == '') {
//       return;
//     }
 
//     this.filteredusers = this.filteredusers.filter((v) => {
//       if (v.displayName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
//         return true;
//       }
//       return false;
//     })
//   }
 
// }

 
