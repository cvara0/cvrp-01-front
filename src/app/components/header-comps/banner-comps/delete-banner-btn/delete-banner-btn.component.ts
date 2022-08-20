import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner.service';
@Component({
  selector: 'app-delete-banner-btn',
  templateUrl: './delete-banner-btn.component.html'
})
export class DeleteBannerBtnComponent implements OnInit {
  closeResult = '';
  constructor(private bannerService:BannerService) { }

  ngOnInit(): void {
  }
delete(){
  this.bannerService.deleteBanner();
}


}
