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

  listStyle    : string='hideContent';
  fadeStyle1    : string='animate__zoomIn';
  isShow       : boolean=false;

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
            3,
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
          ),
          new Skill(
            6,
            'springboot',
            3,
            true,
            'assets/images/springboot-logo.jpg',
            'https://es.wikipedia.org/wiki/Spring_Framework',
            false,
            1
          ),
          new Skill(
            7,
            'bootstrap',
            3,
            true,
            'assets/images/boostrap-logo.jpg',
            'https://es.wikipedia.org/wiki/Bootstrap_(framework)',
            false,
            1
          ),
          new Skill(
            8,
            'linux',
            3,
            true,
            'assets/images/linux-logo.jpg',
            'https://es.wikipedia.org/wiki/GNU/Linux',
            false,
            1
          ),
          new Skill(
            9,
            'git',
            3,
            true,
            'assets/images/git-logo.jpg',
            'https://es.wikipedia.org/wiki/Git',
            false,
            1
          ),
          new Skill(
            10,
            'typescript',
            3,
            true,
            'assets/images/ts-logo.jpg',
            'https://es.wikipedia.org/wiki/TypeScript',
            false,
            1
          ),
          new Skill(
            12,
            'scrum',
            3,
            true,
            'assets/images/scrum-logo.jpg',
            'https://es.wikipedia.org/wiki/Scrum_(desarrollo_de_software)',
            false,
            1
          ),
          new Skill(
            13,
            'python',
            2,
            true,
            'assets/images/python-logo.jpg',
            'https://es.wikipedia.org/wiki/Python',
            false,
            1
          ),
          new Skill(
            14,
            'dart',
            2,
            true,
            'assets/images/dart_logo.jpg',
            'https://es.wikipedia.org/wiki/Dart',
            false,
            1
          ),
          new Skill(
            15,
            'flutter',
            1,
            true,
            'assets/images/flutter_logo.jpg',
            'https://es.wikipedia.org/wiki/Flutter_(software)',
            false,
            1
          ),
          new Skill(
            16,
            'coreldraw',
            4,
            true,
            'assets/images/corel-logo.jpg',
            'https://es.wikipedia.org/wiki/CorelDRAW',
            false,
            1
          ),
          new Skill(
            17,
            'photoshop',
            3,
            true,
            'assets/images/ps-logo.jpg',
            'https://es.wikipedia.org/wiki/Adobe_Photoshop',
            false,
            1
          ),
          new Skill(
            18,
            'inlges',
            4,
            true,
            'assets/images/ingles-logo.jpg',
            '',
            false,
            1
          ),
          new Skill(
            19,
            'solidworks',
            4,
            true,
            'assets/images/solid_logo.jpg',
            'https://es.wikipedia.org/wiki/SolidWorks',
            false,
            1
          ),
          new Skill(
            20,
            'android apps',
            3,
            true,
            'assets/images/android-logo.jpg',
            'https://es.wikipedia.org/wiki/Android_Studio',
            false,
            1
          ),
          new Skill(
            21,
            'c#',
            2,
            true,
            'assets/images/cshap-logo.jpg',
            'https://es.wikipedia.org/wiki/C_Sharp',
            false,
            1
          )
          
        ].sort((p1, p2) => (p1.level < p2.level) ? 1 : (p1.level > p2.level) ? -1 : 0);

    /*this.skillService.getHardSkillList$().subscribe(hardSkillList=>{
    this.hardSkillList=hardSkillList;
    });*/
    this.isEditAll=sessionStorage.getItem("editMode")=="true" && sessionStorage.getItem("userId")==this.editService.userId?true:false;
  }

  ngOnInit(): void {
    this.skillService.getHardSkillList().subscribe(); 
  }

  show(){
    this.fadeStyle1 ='animate__zoomIn';
    
    if(!this.isShow){
      this.listStyle="showContent";
      this.isShow=!this.isShow;
    }
    else
      this.hide();
  }

  hide(){
    this.isShow=!this.isShow;
    this.fadeStyle1 ='animate__zoomOut';
    
    setTimeout(() => {this.listStyle="hideContent";}, 600);
  }

}
