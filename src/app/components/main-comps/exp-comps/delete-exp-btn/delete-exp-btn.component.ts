import { Component, Input, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/services/exp.service';
@Component({
  selector: 'app-delete-exp-btn',
  templateUrl: './delete-exp-btn.component.html'
})
export class DeleteExpBtnComponent implements OnInit {
  @Input() public expToDeleteId : number;
  closeResult = '';
  constructor(private experienceService:ExperienceService) { }

  ngOnInit(): void {
  }
 
delete() {
  
    this.experienceService.deleteExperience(this.expToDeleteId);
}

}
