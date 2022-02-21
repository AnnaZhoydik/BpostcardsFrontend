import {Component, Input, OnInit} from '@angular/core';
import {UploadService} from '../../services/upload.service'


@Component({
  selector: 'app-create-postcard',
  templateUrl: './create-postcard.component.html',
  styleUrls: ['./create-postcard.component.css'],
  providers: [UploadService]
})
export class CreatePostcardComponent implements OnInit {


  files: File[] = [];

  constructor(private _uploadService:UploadService){

  }

  onSelect(event:any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

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

}




