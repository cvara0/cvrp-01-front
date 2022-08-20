import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/components/models/skill.models';

@Component({
  selector: 'app-edit-skill-btn',
  templateUrl: './edit-skill-btn.component.html',
  styleUrls: ['./edit-skill-btn.component.css']
})
export class EditSkillBtnComponent implements OnInit {

  @Input() skillToEdit: Skill;

  constructor() { }

  ngOnInit(): void {
  }

}
