import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Project } from '../components/models/project.models';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectList: Project[];
  private projectList$: Subject<Project[]>;

  constructor() {
    this.projectList=[];
    this.projectList$=new Subject();
    
   }

  postProject(projectToAdd:Project){
    projectToAdd.id=this.projectList.length;
    projectToAdd.imageUrl=projectToAdd.imageUrl==""||projectToAdd.imageUrl==null?"https://i.postimg.cc/MHZyq9ms/sin-imagen-chica.jpg":projectToAdd.imageUrl;
    //console.log(projectToAdd.imageUrl);
    this.projectList.push(projectToAdd);
    this.projectList$.next(this.projectList);//con esto avisamos que ese array cambio
    projectToAdd=new Project;
    alert("Proyecto agregado");
  }

  putProject(projectEdited:Project){
    
    projectEdited.imageUrl=projectEdited.imageUrl==""||projectEdited.imageUrl==null?"https://i.postimg.cc/MHZyq9ms/sin-imagen-chica.jpg":projectEdited.imageUrl;
    this.projectList[projectEdited.id]=projectEdited;
    this.projectList$.next(this.projectList);
    alert("Proyecto editado");
  }

  getProject(projectId:number){
    return this.projectList[projectId];
  }

  getProjectList$(): Observable<Project[]>{
    return this.projectList$.asObservable();//esto permite desde afuera suscribirse y asi ver los cambios y recuperar los valores
  }

  deleteProject(proToDelete:Project){
    if (window.confirm("Eliminar proyecto "+proToDelete.name+" ?")){
    this.projectList = this.projectList.filter(project => project !== proToDelete);
    //delete this.experienceList[expToDeleteId];
    for(let i=0;i<this.projectList.length;i++){
      this.projectList[i].id=i;
    }
    this.projectList$.next(this.projectList);
    alert("Proyecto eliminado");
    }
  }
}
