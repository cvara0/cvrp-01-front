import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/components/models/skill.models';

@Component({
  selector: 'app-skill-fig',
  templateUrl: './skill-fig.component.html',
  styleUrls: ['./skill-fig.component.css']
})
export class SkillFigComponent implements OnInit {
  isEditAll             : boolean;
  @Input() skillToShow  : Skill;

  constructor() { 

  }

  ngOnInit(): void { 
  }

}
