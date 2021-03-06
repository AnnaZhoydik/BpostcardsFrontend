import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {UploadService} from '../../services/upload.service'
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {HttpClient} from "@angular/common/http";
import {car} from "@cloudinary/url-gen/qualifiers/focusOn";


@Component({
  selector: 'app-create-postcard',
  templateUrl: './create-postcard.component.html',
  styleUrls: ['./create-postcard.component.css'],
  providers: [UploadService]
})
export class CreatePostcardComponent implements OnInit {

  files: File[] = [];
  fileName = '';
  public comment: string = "";

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}


  slides = [
    {img: "../../assets/images/postcard1.jpg"},
    {img: "../../assets/images/postcard2.jpg"},
    {img: "../../assets/images/postcard3.jpg"},
    {img: "../../assets/images/postcard4.jpg"},

  ];

  onFileSelected(event: any) {

    const file: File = event.target.files[0];

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

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }

  addToBasket(){
    let el = document.getElementById("quantityProducts");

    let quantity = (el != null) ? el.innerHTML : 0;
    if (el != null){
      quantity = Number(quantity) + 1 + "";
      el.innerHTML = quantity;
    }
    localStorage.setItem("quantity", quantity + "");
    let card = {
      name: "postcard",
      comment: this.comment
    }

    let cards = localStorage.getItem("cards");
    if (cards == null){
      localStorage.setItem("cards", JSON.stringify({}));
    } else {
      let cards_item = JSON.parse(cards);
      let number = Object.keys(cards_item).length + 1;
      cards_item["card_" + number] = card;
      localStorage.setItem("cards", JSON.stringify(cards_item));
      console.log(localStorage.getItem("cards"));
      // let a = localStorage.getItem("cards");
      //
      // if(a == null){
      //   console.log(-1);
      // } else {
      //   let b  = JSON.parse(a);
      //   console.log(Object.keys(b).length);
      // }

    }


    // localStorage.setItem("")
  }
}



