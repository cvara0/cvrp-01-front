import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Skill } from '../components/models/skill.models';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private hardSkillList: Skill[];
  private hardSkillList$: Subject<Skill[]>;

  private softSkillList: Skill[];
  private softSkillList$: Subject<Skill[]>;


  constructor() { 
    this.hardSkillList=[];
    this.hardSkillList$=new Subject();

    this.softSkillList=[];
    this.softSkillList$=new Subject();
  }

  postSkill(skillToAdd:Skill){
    if(skillToAdd.hard==true){
      skillToAdd.id=this.hardSkillList.length;
      skillToAdd.imageUrl=skillToAdd.imageUrl==""||skillToAdd.imageUrl==null?"https://i.postimg.cc/MHZyq9ms/sin-imagen-chica.jpg":skillToAdd.imageUrl;
      this.hardSkillList.push(skillToAdd);
      this.hardSkillList$.next(this.hardSkillList);
      alert("Hard skill agregado");
    }else{
      skillToAdd.id=this.softSkillList.length;
      skillToAdd.imageUrl=skillToAdd.imageUrl==""||skillToAdd.imageUrl==null?"https://i.postimg.cc/MHZyq9ms/sin-imagen-chica.jpg":skillToAdd.imageUrl;
      this.softSkillList.push(skillToAdd);
      this.softSkillList$.next(this.softSkillList);
      alert("Soft skill agregado");
    }
  }

  putSkill(skillEdited:Skill){
    skillEdited.imageUrl=skillEdited.imageUrl==""||skillEdited.imageUrl==null?"https://i.postimg.cc/MHZyq9ms/sin-imagen-chica.jpg":skillEdited.imageUrl;
    if(skillEdited.hard==true){
      this.hardSkillList[skillEdited.id]=skillEdited;
      //this.hardSkillList.splice(skillEdited.id, 1, skillEdited)
      this.hardSkillList$.next(this.hardSkillList);
      alert("Hard skill editado");
    }else{
      this.softSkillList[skillEdited.id]=skillEdited;
      //this.softSkillList.splice(skillEdited.id, 1, skillEdited)
      this.softSkillList$.next(this.softSkillList);
      alert("Soft skill editado");
    }
  }

  getHardSkillList$(): Observable<Skill[]>{
    return this.hardSkillList$.asObservable();
  }

  getSoftSkillList$(): Observable<Skill[]>{
    return this.softSkillList$.asObservable();
  }

  deleteSkill(skillToDelete:Skill){
    if(skillToDelete.hard==true){  
      if (window.confirm("Eliminar skill "+skillToDelete.name+" ?")){
        this.hardSkillList = this.hardSkillList.filter(skill => skill.id !== skillToDelete.id);
        for(let i=0;i<this.hardSkillList.length;i++){
          this.hardSkillList[i].id=i;
        }
        this.hardSkillList$.next(this.hardSkillList);
        alert("Hard skill eliminado");
      }
    }else{
      if (window.confirm("Eliminar skill "+skillToDelete.name+" ?")){
        this.softSkillList = this.softSkillList.filter(skill => skill.id !== skillToDelete.id);
        for(let i=0;i<this.softSkillList.length;i++){
          this.softSkillList[i].id=i;
        }
        this.softSkillList$.next(this.softSkillList);
        alert("Soft skill eliminado");
      }
    } 
}
}
