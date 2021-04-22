import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFileUploaderModule } from "angular-file-uploader";
import { AngularFireStorageModule } from '@angular/fire/storage'
import { AngularFireModule } from '@angular/fire'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFileUploaderModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDALMl1rB7AXegtUfcsDaDwH52X11aA05g",
      authDomain: "pro1-54433.firebaseapp.com",
      databaseURL: "https://pro1-54433-default-rtdb.firebaseio.com",
      projectId: "pro1-54433",
      storageBucket: "pro1-54433.appspot.com",
      messagingSenderId: "641249356313",
      appId: "1:641249356313:web:a75fe071896e0934779888",
      measurementId: "G-8NES4NHE9X"
    }),
    AngularFireStorageModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
