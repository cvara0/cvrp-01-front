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
      /*id           : number=0,
        public name         : string='',
        public level        : number=0,
        public isHard         : boolean=false,
        public imageUrl     : string='',
        public web          : string='',
        public deleted      : boolean=false,
        public userId  */

        this.hardSkillList=[
          new Skill(
            1,
            'java',
            4,
            true,
            'assets/images/java-logo.jpg',
            'https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)',
            false,
            1
          ),
          new Skill(
            2,
            'html',
            4,
            true,
            'assets/images/html-logo.jpg',
            'https://es.wikipedia.org/wiki/HTML',
            false,
            1
          ),
          new Skill(
            3,
            'css',
            4,
            true,
            'assets/images/css-logo.jpg',
            'https://es.wikipedia.org/wiki/CSS',
            false,
            1
          ),
          new Skill(
            4,
            'mysql',
            4,
            true,
            'assets/images/sql-logo.jpg',
            'https://es.wikipedia.org/wiki/SQL',
            false,
            1
          ),
          new Skill(
            5,
            'angular',
            4,
            true,
            'assets/images/angular-logo.jpg',
            'https://es.wikipedia.org/wiki/Angular_(framework)',
            false,
            1
          )
          
        ];

    /*this.skillService.getHardSkillList$().subscribe(hardSkillList=>{
    this.hardSkillList=hardSkillList;
    });*/
    this.isEditAll=sessionStorage.getItem("editMode")=="true" && sessionStorage.getItem("userId")==this.editService.userId?true:false;
  }

  ngOnInit(): void {
    this.skillService.getHardSkillList().subscribe(); 
  }

}
