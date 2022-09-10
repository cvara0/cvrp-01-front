import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/components/models/experience.models';
import { EditService } from 'src/app/services/edit.service';
import { ExperienceService } from 'src/app/services/exp.service';

@Component({
  
  selector: 'app-exp',
  templateUrl: './exp.component.html'
})
export class ExpComponent implements OnInit {
  
  experienceList         : Experience[];
  isEditAll              : boolean;
  constructor(private experienceService:ExperienceService,private editService:EditService) {
    this.experienceService.getExperienceList();
    this.experienceList=[];
    this.experienceService.getExperienceList$().subscribe(experienceList=>{
    this.experienceList=experienceList;
    });
    this.isEditAll=sessionStorage.getItem("editMode")=="true" && sessionStorage.getItem("userId")==this.editService.userId?true:false;
  }

  ngOnInit(): void {
    this.experienceService.getExperienceList().subscribe();
  }
  

}
