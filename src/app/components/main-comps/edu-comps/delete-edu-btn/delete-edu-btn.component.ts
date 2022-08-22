import { Component, Input, OnInit } from '@angular/core';
import { Education } from 'src/app/components/models/education.models';
import { EducationService } from 'src/app/services/edu.service';

@Component({
  selector: 'app-delete-edu-btn',
  templateUrl: './delete-edu-btn.component.html'
})
export class DeleteEduBtnComponent implements OnInit {
  @Input() public eduToDelete : Education;
  constructor(private educationService:EducationService) { }

  ngOnInit(): void {
  }
  delete() {
  
    this.educationService.deleteEducation(this.eduToDelete);
}
}
