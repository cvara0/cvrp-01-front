import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/components/models/skill.models';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-delete-skill-btn',
  templateUrl: './delete-skill-btn.component.html',
  styleUrls: ['./delete-skill-btn.component.css']
})
export class DeleteSkillBtnComponent implements OnInit {

  @Input() skillToDelete: Skill;

  closeResult = '';
  constructor(private skillService:SkillService) { }

  ngOnInit(): void {
  }
 
delete() {
  
    this.skillService.deleteSkill(this.skillToDelete);
}

}
