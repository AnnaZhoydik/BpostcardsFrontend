import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import language from '../../assets/language.json'
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-postcards',
  templateUrl: './postcards.component.html',
  styleUrls: ['./postcards.component.css']
})
export class PostcardsComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {

  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }

  localeToRus(){
    this.useLanguage('ru')
  }

  localeToEng(){
    this.useLanguage('en')
  }
  localeToEst(){
    this.useLanguage('est')
  }

  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
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
  }
}
