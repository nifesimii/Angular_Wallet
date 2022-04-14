import { Component, OnInit } from '@angular/core';
import { NouiFormatter } from "ng2-nouislider";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  public disabled: boolean = false;
  public someValue: any = [30, 60];
  public someMin: number = 10;
  public someMax: number = 100;
  public someconect: any = true;
  public minvalueselect: any = this.someValue[0];
  public maxvalueselect: any = this.someValue[1];

  constructor() { }

  ngOnInit(): void {
    var html5Slider = document.getElementById('rangeslider');
    var inputNumber = document.getElementById('input-number');
    var select = document.getElementById('input-select');
  }

  filterclick() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('filter-open');
  }
  filterclose() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('filter-open');
  }


  saveRange(range: any) {
    this.minvalueselect = range[0];
    this.maxvalueselect = range[1];
  }

}
