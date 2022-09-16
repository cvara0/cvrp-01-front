import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { Experience } from '../components/models/experience.models';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private localhost;

  private experienceList: Experience[];
  private experienceList$: Subject<Experience[]>;

  public userId: string;

  constructor(private http:HttpClient) {
    this.localhost="https://porfolio-ap-back-cvrp.herokuapp.com"
    this.experienceList=[];
    this.experienceList$=new Subject();
    
   }
   

  postExperience(experienceToAdd:Experience){
   
    experienceToAdd.imageUrl=experienceToAdd.imageUrl==""||experienceToAdd.imageUrl==null?"https://i.postimg.cc/MHZyq9ms/sin-imagen-chica.jpg":experienceToAdd.imageUrl;
    experienceToAdd.userId=Number(this.userId);
    return this.http.post(`${this.localhost}/experiences`, experienceToAdd).subscribe(resp=>{
    alert("Experiencia laboral agregada");
    location.reload();});
  }

  putExperience(experienceToEdit:Experience){
    
    experienceToEdit.imageUrl=experienceToEdit.imageUrl==""||experienceToEdit.imageUrl==null?"https://i.postimg.cc/MHZyq9ms/sin-imagen-chica.jpg":experienceToEdit.imageUrl;
    return this.http.put(`${this.localhost}/experiences`,experienceToEdit).subscribe(resp=>{//+educationToEdit.id
      alert("Experiencia laboral editada");
      location.reload();
      });
  }

  getExperienceList$(): Observable<Experience[]>{
    return this.experienceList$.asObservable(); 
  }

  getExperienceList(){
      return this.http.get(`${this.localhost}/experiences/${(this.userId?this.userId:"1")}`)
      .pipe(
        map(resp=>{
          this.experienceList=this.createExpList(resp);
          this.experienceList$.next(this.experienceList);
        })
      );
  }

  private createExpList(expListObj:any):Experience[]{
    const expList:Experience[]=[];
    if(expListObj===null){return [];}
    Object.keys(expListObj).forEach(i=>{
      const exp:Experience=expListObj[i];
      expList.push(exp);
    })
    return expList;
  }

  deleteExperience(expToDelete:Experience){
    if (window.confirm("Eliminar experiencia educativa en "+expToDelete.name+" ?")){
    
    return this.http.delete(`${this.localhost}/experiences/${expToDelete.id}`).subscribe(resp=>{
      alert("Experiencia laboral eliminada");
      location.reload();
    });
    }
    return null;
  }
}
