import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/components/models/skill.models';
import { EditService } from 'src/app/services/edit.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html'
})
export class SoftSkillsComponent implements OnInit {

  skillList         : Skill[];
  isEditAll         : boolean;
  constructor(private skillService:SkillService,private editService:EditService) {
    this.skillService.getSkillList();
    this.skillList=[];
    this.skillService.getSkillList$().subscribe(skillList=>{
    this.skillList=skillList.filter(hardSkill=>hardSkill.hard==false);
    });
    this.isEditAll=sessionStorage.getItem("editMode")=="true" && sessionStorage.getItem("userId")==this.editService.userId?true:false;
  }

  ngOnInit(): void {
    this.skillService.getSkillList().subscribe(); 
  }

}
