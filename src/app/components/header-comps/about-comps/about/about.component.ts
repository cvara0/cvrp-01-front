import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/components/models/about.models';
import { AboutService } from 'src/app/services/about.service';
import { EditService } from 'src/app/services/edit.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  aboutList         : About[];
  isEditAll           : boolean;
  constructor(private aboutService:AboutService,private editService:EditService) {
    this.aboutService.getAboutList();
    this.aboutList=[];
    this.aboutService.getAboutList$().subscribe(aboutList=>{
    this.aboutList=aboutList;
    });
    this.isEditAll=sessionStorage.getItem("editMode")=="true"?true:false;

   }
  ngOnInit(): void {
    this.aboutService.getAboutList().subscribe();
  }

}
