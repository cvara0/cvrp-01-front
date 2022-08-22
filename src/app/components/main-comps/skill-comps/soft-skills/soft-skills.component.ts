import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/components/models/skill.models';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css']
})
export class SoftSkillsComponent implements OnInit {

  softSkillList: Skill[]=[];
  
  constructor(private skillService:SkillService) {
    
    this.skillService.getSoftSkillList$().subscribe(skillList=>{
      this.softSkillList=skillList;
    });
   }

  ngOnInit(): void {
  }

}
