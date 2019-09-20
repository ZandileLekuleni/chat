// import { Component, OnInit } from '@angular/core';
// import { HomePage } from 'src/app/home/home.page';
// import { NavController, AlertController, LoadingController } from '@ionic/angular';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.page.html',
//   styleUrls: ['./login.page.scss'],
// })
// // export class LoginPage implements OnInit {

// //   constructor() { }

// //   ngOnInit() {
// //   }

// // }

// export class LoginPage {

//   // loading: Loading;
//   registerCredentials = { email: '', password: '' };
//   auth: any;
//   loading: any;

//   constructor(
//     public nav: NavController,
//     // private auth: AuthServiceProvider,
//     private alertCtrl: AlertController,
//     private loadingCtrl: LoadingController
//   ) {}

//   public createAccount() {
//     // this.nav.push('RegisterPage');
//   }

//   public login() {
//     this.showLoading()
//     this.auth.login(this.registerCredentials).subscribe(allowed => {
//       if (allowed) {
//         // this.nav.setRoot(HomePage);
//       } else {
//         this.showError("These credentials do not match our records.");
//       }
//     },
//       error => {
//         this.showError(error);
//       });
//   }
//   showError(arg0: string) {
//     throw new Error("Method not implemented.");
//   }

//   showLoading() {
//     this.loading = this.loadingCtrl.create({
//       // content: 'Please wait...',
//       // dismissOnPageChange: true
//     });
//     this.loading.present();
//   }

//   // showError(text) {
//   //   this.loading.dismiss();

//   //   let alert = this.alertCtrl.create({
//   //     title: 'Fail',
//   //     subTitle: text,
//   //     buttons: ['OK']
//   //   });
//   //   alert.present(prompt);
//   }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { User } from 'src/app/Module/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // user = {} as user;

  user = {} as User;

  // email: string = '';
  // password: string = '';
  // error: string = '';

  constructor(private router:Router, 
    private afAuth: AngularFireAuth,
    private toastController: ToastController,
    public loadingController: LoadingController,
    public alertController: AlertController) { }

  ngOnInit() {
  }

  async login(user:User){
    try{
      this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(data => {})
      const key= this.afAuth.auth.currentUser.uid;
      this.router.navigateByUrl('/user')
    }catch(e){
      console.error(e);
    }
  }
  async anonymous(user:User){
    try{
      this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(data => {})
      const key= this.afAuth.auth.currentUser.uid;
      this.router.navigateByUrl('/anonymous')
    }catch(e){
      console.error(e);
    }
  }
  signup(){
    this.router.navigateByUrl('sign-up')
  }
}







