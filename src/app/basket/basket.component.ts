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

  quantity: number = 1;
  i = 1

  plus() {
    if (this.i != 5) {
      this.i++;
      this.quantity = this.i;
    }
  }

  minus() {
    if (this.i != 1) {
      this.i--;
      this.quantity = this.i;
    }
  }
}




