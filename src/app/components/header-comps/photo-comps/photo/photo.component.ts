import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/components/models/photo.models';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html'
})
export class PhotoComponent implements OnInit {

  photoList          : Photo[];
  isEditAll           : boolean;
  constructor() {

    /* 
        public imageUrl     : string="",
          */

    this.photoList=[new Photo(
      'assets/images/perfil.png',
     
    )];
 
   }

  ngOnInit(): void {
   
  }

}
