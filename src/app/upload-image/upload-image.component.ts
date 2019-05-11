import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  // constructor(private http : HttpClient) { }

  ngOnInit() {
  }
  //  selectedImage = null;
  

  // onImageSelected(event){
  //   //  console.log(event);
  //   this.selectedImage = <File>event.target.files[0];
  // }
  // onUpload(){
  //   const fd = new FormData();
  //   fd.append('image', this.selectedImage, this.selectedImage.name);
  //   this.http.post('',fd).subscribe(res =>{
  //     console.log(res);
  //   });
  // }
}
