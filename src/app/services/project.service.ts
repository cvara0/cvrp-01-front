import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { Project } from '../components/models/project.models';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private localhost;

  private projectList: Project[];
  private projectList$: Subject<Project[]>;

  public userId: string;

  constructor(private http:HttpClient) {
    this.localhost="https://porfolio-ap-back-cvrp.herokuapp.com"
    this.projectList=[];
    this.projectList$=new Subject();
    
   }
   

  postProject(projectToAdd:Project){
   
    projectToAdd.imageUrl=projectToAdd.imageUrl==""||projectToAdd.imageUrl==null?"https://i.postimg.cc/MHZyq9ms/sin-imagen-chica.jpg":projectToAdd.imageUrl;
    projectToAdd.userId=Number(this.userId);
    return this.http.post(`${this.localhost}/projects`, projectToAdd);
  }

  putProject(projectToEdit:Project){
    
    projectToEdit.imageUrl=projectToEdit.imageUrl==""||projectToEdit.imageUrl==null?"https://i.postimg.cc/MHZyq9ms/sin-imagen-chica.jpg":projectToEdit.imageUrl;
    return this.http.put(`${this.localhost}/projects`,projectToEdit);
  }

  getProjectList$(): Observable<Project[]>{
    return this.projectList$.asObservable(); 
  }

  getProjectList(){
      return this.http.get(`${this.localhost}/projects/${(this.userId?this.userId:"1")}`)
      .pipe(
        map(resp=>{
          this.projectList=this.createProList(resp);
          this.projectList$.next(this.projectList);
        })
      );
  }

  private createProList(proListObj:any):Project[]{
    const proList:Project[]=[];
    if(proListObj===null){return [];}
    Object.keys(proListObj).forEach(i=>{
      const pro:Project=proListObj[i];
      proList.push(pro);
    })
    return proList;
  }

  deleteProject(proToDelete:Project){
    
    return this.http.delete(`${this.localhost}/projects/${proToDelete.id}`);
   
  }
}
