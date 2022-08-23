import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/components/models/project.models';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.css']
})
export class ProComponent implements OnInit {

  projectList         : Project[]=[];

  constructor(private projectService:ProjectService) {
    this.projectService.getProjectList$().subscribe(projectList=>{
      this.projectList=projectList;
    });
  }

  ngOnInit(): void {
  }

}
