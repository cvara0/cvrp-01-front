import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/components/models/project.models';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-delete-pro-btn',
  templateUrl: './delete-pro-btn.component.html',
  styleUrls: ['./delete-pro-btn.component.css']
})
export class DeleteProBtnComponent implements OnInit {

  @Input() public proToDelete : Project;
  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
  }
  delete() {
  
    this.projectService.deleteProject(this.proToDelete);
  }

}
