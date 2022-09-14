import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/components/models/project.models';
import { EditService } from 'src/app/services/edit.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.css']
})
export class ProComponent implements OnInit {

  projectList         : Project[];
  isEditAll           : boolean;
  constructor(private projectService:ProjectService,private editService:EditService) {
    this.projectService.getProjectList();
    this.projectList=[];
    this.projectService.getProjectList$().subscribe(projectList=>{
    this.projectList=projectList;
    });
    this.isEditAll=sessionStorage.getItem("editMode")=="true"&&sessionStorage.getItem("userId")==this.editService.userId?true:false;
  }

  ngOnInit(): void {
    this.projectService.getProjectList().subscribe();
  }


}
