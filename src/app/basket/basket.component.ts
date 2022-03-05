import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  quantity: number = 0;
  i = 0;

  st = localStorage.getItem("cards");
  public jsonCards = this.st == null ? [] : JSON.parse(this.st);
  public cards = Object.keys(this.jsonCards);
  public comments: string[] = [];

  constructor() {
  }

  ngOnInit(): void {

    console.log(this.jsonCards);

    for (let i in this.cards){
      console.log(this.i);
      this.comments.push(this.jsonCards[this.cards[i]].comment + "")
    }
  }





  plus() {
    if (this.i != 5) {
      this.i++;
      this.quantity = this.i;
    }
  }

  minus() {
    if (this.i != 0) {
      this.i--;
      this.quantity = this.i;
    }
  }
}




