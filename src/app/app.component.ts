import { Component } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  path:string ="";

  constructor(private af:AngularFireStorage){}

  upLoad($event: any){
    this.path = $event.target.files[0];
  }

  uploadImage(){
    console.log(this.path);
    this.af.upload("/files" + Math.random() + this.path, this.path);
  }
}
