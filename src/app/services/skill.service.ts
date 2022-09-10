import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { Skill } from '../components/models/skill.models';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private localhost;

  private hardSkillList: Skill[];
  private hardSkillList$: Subject<Skill[]>;

  private softSkillList: Skill[];
  private softSkillList$: Subject<Skill[]>;

  public userId: string;

  constructor(private http:HttpClient) {
    this.localhost="http://localhost:8080"
    this.hardSkillList=[];
    this.hardSkillList$=new Subject();
    this.softSkillList=[];
    this.softSkillList$=new Subject();
    
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
    return this.http.put(`${this.localhost}/skills`,skillToEdit).subscribe(resp=>{
      alert("Skill editado");
      location.reload();
      });
  }

 
  getHardSkillList$(): Observable<Skill[]>{
    return this.hardSkillList$.asObservable();
  }

  getHardSkillList(){
      return this.http.get(`${this.localhost}/skills/hard/${this.userId}`)
      .pipe(
        map(resp=>{
          this.hardSkillList=this.createSkillList(resp);
          this.hardSkillList$.next(this.hardSkillList);
        })
      );
  }

  getSoftSkillList$(): Observable<Skill[]>{
    return this.softSkillList$.asObservable();
  }

  getSoftSkillList(){
      return this.http.get(`${this.localhost}/skills/soft/${this.userId}`)
      .pipe(
        map(resp=>{
          this.softSkillList=this.createSkillList(resp);
          this.softSkillList$.next(this.softSkillList);
        })
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
