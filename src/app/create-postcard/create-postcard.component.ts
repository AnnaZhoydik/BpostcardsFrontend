import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {UploadService} from '../../services/upload.service'
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-create-postcard',
  templateUrl: './create-postcard.component.html',
  styleUrls: ['./create-postcard.component.css'],
  providers: [UploadService]
})
export class CreatePostcardComponent implements OnInit {

  files: File[] = [];
  fileName = '';

  constructor(private http: HttpClient){

  }

  // onSelect(event:any) {
  //   console.log(event);
  //   this.files.push(...event.addedFiles);
  // }

  // onRemove(event:any) {
  //   console.log(event);
  //   this.files.splice(this.files.indexOf(event), 1);
  // }

  onUpload(){
    if(!this.files[0]){
      alert("first upload an image please!")
    }
    // const file_data=this.files[0];
    // const data=new FormData();
    // data.append('file',file_data);
    //
    // data.append('upload_preset','angular_cloudinary');

    var fd = new FormData();
    fd.append('api_key',"168757552968833");
    fd.append('cloud_name','annazhoydik');
    fd.append("file", "data:image/png");
    fd.append("upload_preset", "angular_cloudinary");

    fetch('https://api.cloudinary.com/v1_1/annazhoydik/upload',
      {
        method: 'POST',
        body: fd
      }
    );

    // this._uploadService.uploadImage(data).subscribe((response:any) => {
    //   if (response){
    //     console.log(response);
    //   }
    // })
  }


  ngOnInit(): void {

  }


slides = [
  {img: "../../assets/images/postcard1.jpg"},
  {img: "../../assets/images/postcard2.jpg"},
  {img: "../../assets/images/postcard3.jpg"},
  {img: "../../assets/images/postcard4.jpg"},

];

  onFileSelected(event: any) {

    const file:File = event.target.files[0];

    if (file) {

      this.fileName = file.name;

      const formData = new FormData();

      formData.append("thumbnail", file);

      const upload$ = this.http.post("/api/thumbnail-upload", formData);

      upload$.subscribe();
    }
  }
slideConfig = {"slidesToShow": 2, "slidesToScroll": 2};

addSlide() {
  this.slides.push({img: "../../assets/images/1645300431302.png"})
}

removeSlide() {
  this.slides.length = this.slides.length - 1;
}

slickInit(e:any) {
  console.log('slick initialized');
}

breakpoint(e:any) {
  console.log('breakpoint');
}

afterChange(e:any) {
  console.log('afterChange');
}

beforeChange(e:any) {
  console.log('beforeChange');
}}



