import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { Skill } from '../components/models/skill.models';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private localhost;

  private skillList: Skill[];
  private skillList$: Subject<Skill[]>;

  public userId: string;

  constructor(private http:HttpClient) {
    this.localhost="http://localhost:8080"
    this.skillList=[];
    this.skillList$=new Subject();
    
   }
   
  postSkill(skillToAdd:Skill){
   
    skillToAdd.imageUrl=skillToAdd.imageUrl==""||skillToAdd.imageUrl==null?"https://i.postimg.cc/MHZyq9ms/sin-imagen-chica.jpg":skillToAdd.imageUrl;
    skillToAdd.userId=Number(this.userId);
    return this.http.post(`${this.localhost}/skills`, skillToAdd).subscribe(resp=>{
    alert("Skill agregado");
    location.reload();});
  }

  putSkill(skillToEdit:Skill){
    
    skillToEdit.imageUrl=skillToEdit.imageUrl==""||skillToEdit.imageUrl==null?"https://i.postimg.cc/MHZyq9ms/sin-imagen-chica.jpg":skillToEdit.imageUrl;
    return this.http.put(`${this.localhost}/skills`,skillToEdit).subscribe(resp=>{//+educationToEdit.id
      alert("Skill editado");
      location.reload();
      });
  }

 
  getSkillList$(): Observable<Skill[]>{
    return this.skillList$.asObservable();//esto permite desde afuera suscribirse y asi ver los cambios y recuperar los valores
  }

  getSkillList(){
      return this.http.get(`${this.localhost}/skills/${this.userId}`)
      .pipe(
        map(resp=>{
          this.skillList=this.createSkillList(resp);
          this.skillList$.next(this.skillList);
        })//map transforma la info en fuincion de un metodo y regresa algo
      );
  }

  private createSkillList(skillListObj:any):Skill[]{
    const skillList:Skill[]=[];
    if(skillListObj===null){return [];}
    Object.keys(skillListObj).forEach(i=>{
      const ski:Skill=skillListObj[i];
      skillList.push(ski);
    })
    return skillList;
  }

  deleteSkill(skillToDelete:Skill){
    if (window.confirm("Eliminar skill "+skillToDelete.name+" ?")){
    
    return this.http.delete(`${this.localhost}/skills/${skillToDelete.id}`).subscribe(resp=>{
      alert("Skill eliminado");
      location.reload();
    });
    }
    return null;
  }
}
