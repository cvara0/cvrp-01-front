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
      this.hardSkillList.push(skillToAdd);
      this.hardSkillList$.next(this.hardSkillList);
      alert("Hard skill agregado");
    }else{
      skillToAdd.id=this.softSkillList.length;
      this.softSkillList.push(skillToAdd);
      this.softSkillList$.next(this.softSkillList);
      alert("Soft skill agregado");
    }
  }

  putSkill(skillEdited:Skill){
    if(skillEdited.hard==true){
      this.hardSkillList.splice(skillEdited.id, 1, skillEdited)
      this.hardSkillList$.next(this.hardSkillList);
      alert("Hard skill editado");
    }else{
      this.softSkillList.splice(skillEdited.id, 1, skillEdited)
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
      if (window.confirm("Eliminar hard skill?")){
        this.hardSkillList = this.hardSkillList.filter(skill => skill.id !== skillToDelete.id);
        this.hardSkillList$.next(this.hardSkillList);
        alert("Hard skill eliminado");
      }
    }else{
      if (window.confirm("Eliminar soft skill?")){
        this.softSkillList = this.softSkillList.filter(skill => skill.id !== skillToDelete.id);
        this.softSkillList$.next(this.softSkillList);
        alert("Soft skill eliminado");
      }
    } 
}
}
