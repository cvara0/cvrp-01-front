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
  isLoading:boolean=false;

  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
  }
  delete() {
    this.isLoading=true;
    if (window.confirm("Eliminar proyecto "+this.proToDelete.name+" ?")){
        this.projectService.deleteProject(this.proToDelete).subscribe(resp=>{
          this.isLoading=false;
          location.reload();
        });
      }else
      this.isLoading=false;
    }

}
