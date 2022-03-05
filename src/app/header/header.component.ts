import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class  HeaderComponent implements OnInit {

  public quantity: number = Number(localStorage.getItem("quantity"));
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
}
