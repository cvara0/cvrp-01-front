import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/components/models/experience.models';
import { ExperienceService } from 'src/app/services/exp.service';
@Component({
  selector: 'app-delete-exp-btn',
  templateUrl: './delete-exp-btn.component.html'
})
export class DeleteExpBtnComponent implements OnInit {
  @Input() public expToDelete : Experience;
  closeResult = '';
  isLoading:boolean=false;

  constructor(private experienceService:ExperienceService) { }

  ngOnInit(): void {
  }
 
delete() {
  this.isLoading=true;
  if (window.confirm("Eliminar experiencia laboral en "+this.expToDelete.name+" ?")){
    this.experienceService.deleteExperience(this.expToDelete).subscribe(resp=>{
      this.isLoading=false;
      location.reload();
    });
  }
}

}
