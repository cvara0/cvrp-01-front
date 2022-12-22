import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/components/models/photo.models';
import { EditService } from 'src/app/services/edit.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html'
})
export class PhotoComponent implements OnInit {

  photoList          : Photo[];
  isEditAll           : boolean;
  constructor(private photoService:PhotoService,private editService:EditService) {

    this.photoService.getPhotoList();

    /* public id           : number=0,
        public imageUrl     : string="",
        public deleted      : boolean=false,
        public userId  */

    this.photoList=[new Photo(
      1,
      'https://i.postimg.cc/bwJV7g8w/Captura-de-pantalla-de-2022-11-06-21-19-43.png',
      false,
      1
    )];


   /* this.photoService.getPhotoList$().subscribe(photoList=>{
    this.photoList=photoList;
    });*/
    this.isEditAll=sessionStorage.getItem("editMode")=="true"&&sessionStorage.getItem("userId")==this.editService.userId?true:false; 
   }
  
  ngOnInit(): void {
    this.photoService.getPhotoList().subscribe();
  }

}
