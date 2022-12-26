import { Component, Input, OnInit } from '@angular/core';
import { Banner } from 'src/app/components/models/banner.models';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  
  bannerList          : Banner[];
  
  constructor() {

/*
        public imageUrl     : string="" */

    this.bannerList=[new Banner('assets/images/cvara-banner.jpg')];
     
   }
  
  ngOnInit(): void {
    
  }

 

}
