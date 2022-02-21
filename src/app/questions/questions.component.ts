import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

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
