import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/components/models/experience.models';
import { ExperienceService } from 'src/app/services/exp.service';

@Component({
  
  selector: 'app-exp',
  templateUrl: './exp.component.html'
})
export class ExpComponent implements OnInit {
  
  experienceList         : Experience[]=[];

  constructor(private experienceService:ExperienceService) {
    this.experienceService.getExperienceList$().subscribe(experienceList=>{
      this.experienceList=experienceList;
    });
    

   }
  ngOnInit(): void {
  }
  

}
