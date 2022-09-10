import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/components/models/skill.models';
import { EditService } from 'src/app/services/edit.service';

@Component({
  selector: 'app-skill-fig',
  templateUrl: './skill-fig.component.html',
  styleUrls: ['./skill-fig.component.css']
})
export class SkillFigComponent implements OnInit {
  isEditAll             : boolean;
  @Input() skillToShow  : Skill;

  constructor(private editService:EditService) { 
    this.isEditAll=sessionStorage.getItem("editMode")=="true" && sessionStorage.getItem("userId")==this.editService.userId?true:false;
  }

  ngOnInit(): void { 
  }

}
