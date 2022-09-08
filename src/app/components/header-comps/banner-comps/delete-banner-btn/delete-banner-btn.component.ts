import { Component, Input, OnInit } from '@angular/core';
import { Banner } from 'src/app/components/models/banner.models';
import { BannerService } from 'src/app/services/banner.service';
@Component({
  selector: 'app-delete-banner-btn',
  templateUrl: './delete-banner-btn.component.html'
})
export class DeleteBannerBtnComponent implements OnInit {
 
  @Input() bannerToDelete: Banner;
  constructor(private bannerService:BannerService) { }

  ngOnInit(): void {
  }
delete(){
  this.bannerService.deleteBanner(this.bannerToDelete);
}


}
