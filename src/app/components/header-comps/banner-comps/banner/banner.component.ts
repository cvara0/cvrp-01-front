import { Component, Input, OnInit } from '@angular/core';
import { Banner } from 'src/app/components/models/banner.models';
import { BannerService } from 'src/app/services/banner.service';
import { EditService } from 'src/app/services/edit.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  
  bannerList          : Banner[];
  isEditAll           : boolean;
  constructor(private bannerService:BannerService,private editService:EditService) {

    this.bannerService.getBannerList();
    this.bannerList=[];
    this.bannerService.getBannerList$().subscribe(bannerList=>{
    this.bannerList=bannerList;
    });
    this.isEditAll=sessionStorage.getItem("editMode")=="true"&&sessionStorage.getItem("userId")==this.editService.userId?true:false; 
   }
  
  ngOnInit(): void {
    this.bannerService.getBannerList().subscribe();
  }

 

}
