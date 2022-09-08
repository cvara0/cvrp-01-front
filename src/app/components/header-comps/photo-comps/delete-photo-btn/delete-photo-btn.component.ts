import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/components/models/photo.models';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-delete-photo-btn',
  templateUrl: './delete-photo-btn.component.html'
})
export class DeletePhotoBtnComponent implements OnInit {

  @Input() photoToDelete: Photo;
  constructor(private photoService:PhotoService) { }

  ngOnInit(): void {
  }
delete(){
  this.photoService.deletePhoto(this.photoToDelete);
}

}
