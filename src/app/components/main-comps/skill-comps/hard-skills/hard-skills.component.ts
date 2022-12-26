import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/components/models/skill.models';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html'
})
export class HardSkillsComponent implements OnInit {

  hardSkillList         : Skill[];

  listStyle    : string='hideContent';
  fadeStyle1    : string='animate__zoomIn';
  isShow       : boolean=false;

  constructor() {
    
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
            'java',
            4,
            true,
            'assets/images/hard_skills_images/java_icon.png',
            'https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)'
          ),
          new Skill(
            'html',
            4,
            true,
            'assets/images/hard_skills_images/html_icon.png',
            'https://es.wikipedia.org/wiki/HTML'
          ),
          new Skill(
            'css',
            4,
            true,
            'assets/images/hard_skills_images/css_icon.png',
            'https://es.wikipedia.org/wiki/CSS'
          ),
          new Skill(
            'mysql',
            3,
            true,
            'assets/images/hard_skills_images/sql_icon.png',
            'https://es.wikipedia.org/wiki/SQL'
          ),
          new Skill(
            'angular',
            4,
            true,
            'assets/images/hard_skills_images/angular_icon.png',
            'https://es.wikipedia.org/wiki/Angular_(framework)'
          ),
          new Skill(
            'springboot',
            3,
            true,
            'assets/images/hard_skills_images/springboot_icon.png',
            'https://es.wikipedia.org/wiki/Spring_Framework'
          ),
          new Skill(
            'bootstrap',
            3,
            true,
            'assets/images/hard_skills_images/bostra_icon.png',
            'https://es.wikipedia.org/wiki/Bootstrap_(framework)'
          ),
          new Skill(
            'linux',
            3,
            true,
            'assets/images/hard_skills_images/linux_icon.png',
            'https://es.wikipedia.org/wiki/GNU/Linux'
          ),
          new Skill(
            'git',
            3,
            true,
            'assets/images/hard_skills_images/git_icon.png',
            'https://es.wikipedia.org/wiki/Git'
          ),
          new Skill(
            'typescript',
            3,
            true,
            'assets/images/hard_skills_images/ts_icon.png',
            'https://es.wikipedia.org/wiki/TypeScript'
          ),
          new Skill(
            'scrum',
            3,
            true,
            'assets/images/hard_skills_images/scrum_icon.png',
            'https://es.wikipedia.org/wiki/Scrum_(desarrollo_de_software)'
          ),
          new Skill(
            'python',
            2,
            true,
            'assets/images/hard_skills_images/py_icon.png',
            'https://es.wikipedia.org/wiki/Python'
          ),
          new Skill(
            'dart',
            2,
            true,
            'assets/images/hard_skills_images/dart_icon.jpg',
            'https://es.wikipedia.org/wiki/Dart'
          ),
          new Skill(
            'flutter',
            1,
            true,
            'assets/images/hard_skills_images/flutter_icon.png',
            'https://es.wikipedia.org/wiki/Flutter_(software)'
          ),
          new Skill(
            'coreldraw',
            4,
            true,
            'assets/images/hard_skills_images/corel_icon.png',
            'https://es.wikipedia.org/wiki/CorelDRAW'
          ),
          new Skill(
            'photoshop',
            3,
            true,
            'assets/images/hard_skills_images/ps_icon.png',
            'https://es.wikipedia.org/wiki/Adobe_Photoshop'
          ),
          new Skill(
            'inlges',
            4,
            true,
            'assets/images/hard_skills_images/ingles_icon.png',
            ''
          ),
          new Skill(
            'solidworks',
            4,
            true,
            'assets/images/hard_skills_images/sw_icon.png',
            'https://es.wikipedia.org/wiki/SolidWorks'
          ),
          new Skill(
            'android apps',
            3,
            true,
            'assets/images/hard_skills_images/android_icon.png',
            'https://es.wikipedia.org/wiki/Android_Studio'
          ),
          new Skill(
            'c#',
            2,
            true,
            'assets/images/hard_skills_images/csharp_icon.png',
            'https://es.wikipedia.org/wiki/C_Sharp'
          )
          
        ].sort((p1, p2) => (p1.level < p2.level) ? 1 : (p1.level > p2.level) ? -1 : 0);

  }

  ngOnInit(): void {
    
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
