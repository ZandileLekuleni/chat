// import { Component, OnInit, NgZone } from '@angular/core';
// import { NavParams, NavController } from '@ionic/angular';
// import { ImagehandlerService } from 'src/app/service/imagehandler.service';

// @Component({
//   selector: 'app-pic',
//   templateUrl: './pic.page.html',
//   styleUrls: ['./pic.page.scss'],
// })
// export class PicPage implements OnInit {
//   imageservice: any;
//   imgurl: any;
//   moveon: any;
//   userservice: any;

//   constructor( public navCtrl: NavController, public imgageservice: ImagehandlerService,
//     public zone: NgZone) { }

//   ngOnInit() {
//   }
// chooseimage(){
//   this.imageservice.uploadimage().then((uploadedurl: any) => {
//     this.zone.run(() => {
//       this.imgurl = uploadedurl;
//       this.moveon = false;
//     })
//   })
// }

// updateproceed() {
//   this.userservice.updateimage(this.imgurl).then((res: any) => {
//     if (res.sucess) {
//       // this.navCtrl.setRoot('TabsPage');
//     }
//     else {
//       alert(res);
//     }
//   })
// }
// proceed() {
//   // this.navCtrl.setRoot('TabsPage');
// }
// }
