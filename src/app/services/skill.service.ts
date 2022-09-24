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
    this.localhost="https://porfolio-ap-back-cvrp.herokuapp.com"
    this.hardSkillList=[];
    this.hardSkillList$=new Subject();
    this.softSkillList=[];
    this.softSkillList$=new Subject();
    
   }
   
  postSkill(skillToAdd:Skill){
   
    skillToAdd.imageUrl=skillToAdd.imageUrl==""||skillToAdd.imageUrl==null?"https://i.postimg.cc/MHZyq9ms/sin-imagen-chica.jpg":skillToAdd.imageUrl;
    skillToAdd.userId=Number(this.userId);
    return this.http.post(`${this.localhost}/skills`, skillToAdd);
  }

  putSkill(skillToEdit:Skill){
    
    skillToEdit.imageUrl=skillToEdit.imageUrl==""||skillToEdit.imageUrl==null?"https://i.postimg.cc/MHZyq9ms/sin-imagen-chica.jpg":skillToEdit.imageUrl;
    return this.http.put(`${this.localhost}/skills`,skillToEdit);
  }

 
  getHardSkillList$(): Observable<Skill[]>{
    return this.hardSkillList$.asObservable();
  }

  getHardSkillList(){
      return this.http.get(`${this.localhost}/skills/hard/${(this.userId?this.userId:"1")}`)
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
      return this.http.get(`${this.localhost}/skills/soft/${(this.userId?this.userId:"1")}`)
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
    
    return this.http.delete(`${this.localhost}/skills/${skillToDelete.id}`);
   
  }
}
