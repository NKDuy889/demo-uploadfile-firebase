import {Component, OnInit} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {map, catchError, finalize} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  file = null;
  name: string[] = [];
  uploadProgress: Observable<number | undefined> | undefined;
  downLoadURL: Observable<string> | undefined
  fb: any;

  constructor(private af: AngularFireStorage,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    // this.http.get(`https://firebasestorage.googleapis.com/v0/b/pro1-54433.appspot.com/o/files0.18640518154345842a3ec49551c2622a935f3ad0950591b6c.jpg?alt=media&token=f86a7acd-b1bf-4e2f-971c-994e3931f360`,
    //   {headers: {'Content-Type': ''}}).subscribe(res => {
    //   console.log(res);
    // });
  }

  upLoad(event: any) {
    // @ts-ignore
    this.file = Array.from(event.target.files);
    this.name = Array.from(event.target.files).map((file: any) => '/files' + Date.now() + file.name);
  }

  uploadImage() {
    console.log(this.file);
    // @ts-ignore
    this.file.forEach((file: any, i) => {
      const fileRef: AngularFireStorageReference = this.af.ref(
        this.name[i]
      );
      if (this.file !== null) {
        const task = this.af.upload(this.name[i], file);
        task.percentageChanges().subscribe((e) => {
          console.log(e);
        });
        task.then(() => {
          this.downLoadURL =  fileRef.getDownloadURL();
          this.downLoadURL.subscribe(url => {
            if(url){
              this.fb = url;
            }
            console.log(this.fb);
          })
          // fileRef.getDownloadURL().subscribe((url) => {
          //   this.http.get(url).subscribe(res => {
          //     console.log(url);
          //   });
          // });
        });
      }
    })
  }
}
