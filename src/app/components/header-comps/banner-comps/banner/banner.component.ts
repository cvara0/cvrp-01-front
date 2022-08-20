import { Component, Input, OnInit } from '@angular/core';
import { Banner } from 'src/app/components/models/banner.models';
import { BannerService } from 'src/app/services/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  
  banner         : Banner=new Banner();
  constructor(private bannerService:BannerService) {

    this.bannerService.getBanner$().subscribe(banner=>{
      this.banner=banner;
    });

   }
  
  ngOnInit(): void {
  }

 

}
