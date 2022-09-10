import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/components/models/skill.models';
import { EditService } from 'src/app/services/edit.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html'
})
export class HardSkillsComponent implements OnInit {

  hardSkillList         : Skill[];
  isEditAll             : boolean;
  constructor(private skillService:SkillService,private editService:EditService) {
    this.skillService.getHardSkillList();
    this.hardSkillList=[];
    this.skillService.getHardSkillList$().subscribe(hardSkillList=>{
    this.hardSkillList=hardSkillList;
    });
    this.isEditAll=sessionStorage.getItem("editMode")=="true" && sessionStorage.getItem("userId")==this.editService.userId?true:false;
  }

  ngOnInit(): void {
    this.skillService.getHardSkillList().subscribe(); 
  }

}
