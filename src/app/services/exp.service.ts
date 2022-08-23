import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Experience } from '../components/models/experience.models';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private experienceList: Experience[];
  private experienceList$: Subject<Experience[]>;
  

  constructor() { 
    this.experienceList=[];
    this.experienceList$=new Subject();
  }

  postExperience(experieceToAdd:Experience){
    experieceToAdd.id=this.experienceList.length;
    experieceToAdd.imageUrl=experieceToAdd.imageUrl==""||experieceToAdd.imageUrl==null?"https://i.postimg.cc/MHZyq9ms/sin-imagen-chica.jpg":experieceToAdd.imageUrl;
    //console.log(experieceToAdd.imageUrl);
    this.experienceList.push(experieceToAdd);
    this.experienceList$.next(this.experienceList);//con esto avisamos que ese array cambio
    //experieceToAdd=new Experience;
    alert("Experiencia laboral agregada");
  }

  putExperience(experienceEdited:Experience){
    
    experienceEdited.imageUrl=experienceEdited.imageUrl==""||experienceEdited.imageUrl==null?"https://i.postimg.cc/MHZyq9ms/sin-imagen-chica.jpg":experienceEdited.imageUrl;
    //this.experienceList.splice(experienceEdited.id, 1, experienceEdited);
    this.experienceList[experienceEdited.id]=experienceEdited;
    this.experienceList$.next(this.experienceList);
    alert("Experiencia laboral editada");
  }

  getExperience(experienceId:number){
    //console.log(this.experienceList);
    return this.experienceList[experienceId];
  }

  getExperienceList$(): Observable<Experience[]>{
    return this.experienceList$.asObservable();//esto permite desde afuera suscribirse y asi ver los cambios y recuperar los valores
  }

  deleteExperience(expToDelete:Experience){
    if (window.confirm("Eliminar experiencia laboral en "+expToDelete.name+" ?")){
      //this.experienceList.push(this.experienceList.splice(expToDeleteId, 1)[0]);
      //this.experienceList.pop();
    this.experienceList = this.experienceList.filter(experience => experience !== expToDelete);
    for(let i=0;i<this.experienceList.length;i++){
      this.experienceList[i].id=i;
    }
    //delete this.experienceList[expToDeleteId];
    this.experienceList$.next(this.experienceList);
    alert("Experiencia laboral eliminada");
    }
  }


  /*private sharingObservablePrivate:BehaviorSubject<Experience>=new BehaviorSubject<Experience>({
    id           : 0,
    name         : '',
    web          : '',
    yearSince    : 0,
    yearTo       : 0,
    imageUrl     : '',
    description  : '',
    editing      : false,
  });

  

  get sharingObservable(){
    return this.sharingObservablePrivate.asObservable();
  }

  set sharingObservableData(data:Experience){
    this.sharingObservablePrivate.next(data);
  }*/
}
