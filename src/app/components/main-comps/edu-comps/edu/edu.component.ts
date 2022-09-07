import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/components/models/education.models';
import { EducationListMy } from 'src/app/components/models/educationListMy.models';
import { EditService } from 'src/app/services/edit.service';
import { EducationService } from 'src/app/services/edu.service';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html'
})
export class EduComponent implements OnInit {

  educationList         : Education[];
  isEditAll           : boolean;
  constructor(private educationService:EducationService,private editService:EditService) {
    this.educationService.getEducationList();
    this.educationList=[];
    this.educationService.getEducationList$().subscribe(educationList=>{
    this.educationList=educationList;
    });
    this.isEditAll=sessionStorage.getItem("editMode")=="true"&&sessionStorage.getItem("userId")==this.editService.userId?true:false;
  }

  ngOnInit(): void {
    this.educationService.getEducationList().subscribe();
  }

}
