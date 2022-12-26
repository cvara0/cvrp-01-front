import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/components/models/skill.models';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html'
})
export class SoftSkillsComponent implements OnInit {

  softSkillList         : Skill[];

  listStyle    : string='hideContent';
  fadeStyle1    : string='animate__zoomIn';
  isShow       : boolean=false;
  
  constructor() {


    this.softSkillList=[
          new Skill(
            'perseverante',
            0,
            false,
            'assets/images/persev-logo.jpg',
            ''
          ),new Skill(
            'creativo',
            0,
            false,
            'assets/images/foco-logo.jpg',
            ''
          ),new Skill(
            'flexible',
            0,
            false,
            'assets/images/persev-logo.jpg',
            ''
          ),new Skill(
            'adaptable',
            0,
            false,
            'assets/images/persev-logo.jpg',
            ''
          ),new Skill(
            'autonomo',
            0,
            false,
            'assets/images/persev-logo.jpg',
            ''
          ),new Skill(
            'comunicativo',
            0,
            false,
            'assets/images/persev-logo.jpg',
            ''
          ),new Skill(
            'resiliente',
            0,
            false,
            'assets/images/persev-logo.jpg',
            ''
          ),new Skill(
            'ordenado',
            0,
            false,
            'assets/images/persev-logo.jpg',
            ''
          ),new Skill(
            'experimental',
            0,
            false,
            'assets/images/persev-logo.jpg',
            ''
          ),new Skill(
            'cooperativo',
            0,
            false,
            'assets/images/persev-logo.jpg',
            ''
          ),];
  
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
