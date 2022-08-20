import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/components/models/skill.models';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html'
})
export class HardSkillsComponent implements OnInit {

  hardSkillList: Skill[]=[];
  
  constructor(private skillService:SkillService) {
    
    this.skillService.getHardSkillList$().subscribe(skillList=>{
      this.hardSkillList=skillList;
    });
   }

  ngOnInit(): void {
  }

}
