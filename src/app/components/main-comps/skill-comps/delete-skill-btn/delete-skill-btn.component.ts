import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/components/models/skill.models';

@Component({
  selector: 'app-delete-skill-btn',
  templateUrl: './delete-skill-btn.component.html',
  styleUrls: ['./delete-skill-btn.component.css']
})
export class DeleteSkillBtnComponent implements OnInit {

  @Input() skillToDelete: Skill;

  constructor() { }

  ngOnInit(): void {
  }

}
