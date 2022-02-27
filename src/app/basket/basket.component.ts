import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

  quantity: number = 0;
  i = 0;

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




