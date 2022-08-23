import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/components/models/education.models';
import { EducationListMy } from 'src/app/components/models/educationListMy.models';
import { EducationService } from 'src/app/services/edu.service';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html'
})
export class EduComponent implements OnInit {

  educationList         : Education[]=new EducationListMy().educationListMy;;

  constructor(private educationService:EducationService) {
    this.educationService.getEducationList$().subscribe(educationList=>{
      this.educationList=educationList;
    });
  }

  ngOnInit(): void {
  }

}
