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
    this.photoList=[];
    this.photoService.getPhotoList$().subscribe(photoList=>{
    this.photoList=photoList;
    });
    this.isEditAll=sessionStorage.getItem("editMode")=="true"&&sessionStorage.getItem("userId")==this.editService.userId?true:false; 
   }
  
  ngOnInit(): void {
    this.photoService.getPhotoList().subscribe();
  }

}
