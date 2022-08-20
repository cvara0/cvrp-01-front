import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Education } from '../components/models/education.models';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private educationList: Education[];
  private educationList$: Subject<Education[]>;

  constructor() {
    this.educationList=[];
    this.educationList$=new Subject();
    
   }

  postEducation(ducationToAdd:Education){
    ducationToAdd.id=this.educationList.length;
    ducationToAdd.imageUrl=ducationToAdd.imageUrl==""||ducationToAdd.imageUrl==null?"https://i.postimg.cc/MHZyq9ms/sin-imagen-chica.jpg":ducationToAdd.imageUrl;
    //console.log(experieceToAdd.imageUrl);
    this.educationList.push(ducationToAdd);
    this.educationList$.next(this.educationList);//con esto avisamos que ese array cambio
    ducationToAdd=new Education;
    alert("Experiencia educativa agregada");
  }

  putEducation(educationEdited:Education){
    
    //this.experienceList[experienceId]=experienceEdited;
    educationEdited.imageUrl=educationEdited.imageUrl==""||educationEdited.imageUrl==null?"https://i.postimg.cc/MHZyq9ms/sin-imagen-chica.jpg":educationEdited.imageUrl;
    this.educationList.splice(educationEdited.id, 1, educationEdited)
    this.educationList$.next(this.educationList);
    alert("Experiencia educativa editada");
  }

  getEducation(educationId:number){
    //console.log(this.experienceList);
    return this.educationList[educationId];
  }

  getEducationList$(): Observable<Education[]>{
    return this.educationList$.asObservable();//esto permite desde afuera suscribirse y asi ver los cambios y recuperar los valores
  }

  deleteEducation(eduToDeleteId:number){
    if (window.confirm("Eliminar experiencia educativa?")){
    this.educationList = this.educationList.filter(education => education.id !== eduToDeleteId);
    //delete this.experienceList[expToDeleteId];
    this.educationList$.next(this.educationList);
    alert("Experiencia educativa eliminada");
    }
  }

}
