import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/components/models/photo.models';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html'
})
export class PhotoComponent implements OnInit {

  photo         : Photo=new Photo();
  constructor(private photoService:PhotoService) {

    this.photoService.getPhoto$().subscribe(photo=>{
      this.photo=photo;
    });

   }

  ngOnInit(): void {
  }

}
