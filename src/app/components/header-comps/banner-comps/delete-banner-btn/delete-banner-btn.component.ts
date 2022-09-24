import { Component, Input, OnInit } from '@angular/core';
import { Banner } from 'src/app/components/models/banner.models';
import { BannerService } from 'src/app/services/banner.service';
@Component({
  selector: 'app-delete-banner-btn',
  templateUrl: './delete-banner-btn.component.html'
})
export class DeleteBannerBtnComponent implements OnInit {
 
  @Input() bannerToDelete: Banner;
  isLoading:boolean=false;

  constructor(private bannerService:BannerService) { }

  ngOnInit(): void {
  }
delete(){
  this.isLoading=true;
    if (window.confirm("Eliminar imagen de portada?")){
      this.bannerService.deleteBanner(this.bannerToDelete).subscribe(resp=>{
        this.isLoading=false;
        location.reload();
      });
  }
}


}
