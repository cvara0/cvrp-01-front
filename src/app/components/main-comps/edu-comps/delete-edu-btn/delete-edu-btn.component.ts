import { Component, Input, OnInit } from '@angular/core';
import { EducationService } from 'src/app/services/edu.service';

@Component({
  selector: 'app-delete-edu-btn',
  templateUrl: './delete-edu-btn.component.html'
})
export class DeleteEduBtnComponent implements OnInit {
  @Input() public eduToDeleteId : number;
  constructor(private educationService:EducationService) { }

  ngOnInit(): void {
  }
  delete() {
  
    this.educationService.deleteEducation(this.eduToDeleteId);
}
}
