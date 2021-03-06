import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Autoplay,
  Pagination,
} from 'swiper/core';
SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
    
  }
  
  ngAfterViewInit(): void {
    var paginations = document.getElementsByClassName('swiper-pagination')[0];
    paginations.classList.add('pagination-rightnumber');
  }

  pagination = {        
    clickable: true,    
    renderBullet: function (index:any, className:any) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

}
