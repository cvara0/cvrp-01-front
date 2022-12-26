import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/components/models/experience.models';

@Component({
  
  selector: 'app-exp',
  templateUrl: './exp.component.html'
})
export class ExpComponent implements OnInit {
  
  experienceList         : Experience[];

  listStyle    : string='hideContent';
  fadeStyle1    : string='animate__fadeInLeftBig';
  fadeStyle2    : string='animate__fadeInRightBig';
  isShow       : boolean=false;
  
  constructor() {
    
    this.experienceList=[];
   
  }

  ngOnInit(): void {
  
  }
  
  show(){
    this.fadeStyle1 ='animate__fadeInLeftBig';
    this.fadeStyle2 ='animate__fadeInRightBig';
    if(!this.isShow){
      this.listStyle="showContent";
      this.isShow=!this.isShow;
    }
    else
      this.hide();
  }

  hide(){
    this.isShow=!this.isShow;
    this.fadeStyle1 ='animate__fadeOutLeftBig';
    this.fadeStyle2 ='animate__fadeOutRightBig';
    setTimeout(() => {this.listStyle="hideContent";}, 500);
  }

}
