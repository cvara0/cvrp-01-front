import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AboutService } from 'src/app/services/about.service';
import { BannerService } from 'src/app/services/banner.service';
import { EditService } from 'src/app/services/edit.service';
import { PhotoService } from 'src/app/services/photo.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private aboutService:AboutService,
    private bannerService:BannerService,
    private photoService:PhotoService,
    private editService:EditService
    ) { 
    this.activatedRoute.params.subscribe( params => {
      
      this.bannerService.userId=params['id'];
      this.photoService.userId=params['id'];
      this.aboutService.userId=params['id'];
      this.editService.userId=params['id'];
  });
    
    //this.aboutService.getAboutList();indistinto
    
  }

  ngOnInit(): void {
    
  }
 

}
