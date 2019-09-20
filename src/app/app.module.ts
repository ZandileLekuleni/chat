import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';



import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
// import { file } from 'cordova';
// import { File } from '@ionic-native/file';
// import { FileChooser } from '@ionic-native/file-chooser';
// import { FilePath } from '@ionic-native/file-path';

  const firebaseConfig = {
    apiKey: "AIzaSyAExd8pU0IXJJYMaf3XYTa3vhtVBYW3SxU",
    authDomain: "chat-zone-a90ab.firebaseapp.com",
    databaseURL: "https://chat-zone-a90ab.firebaseio.com",
    projectId: "chat-zone-a90ab",
    storageBucket: "chat-zone-a90ab.appspot.com",
    messagingSenderId: "728830771665",
    appId: "1:728830771665:web:c8cc0417c8c84e96"
  };

  
@NgModule({

  
  exports: [RouterModule],

  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, 
    AngularFireAuthModule,
    AngularFireStorageModule ,
    ],
  providers: [
    StatusBar,
    SplashScreen,
    // file,
    // filePath,
    // fileChooser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}




