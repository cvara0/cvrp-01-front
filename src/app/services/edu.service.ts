import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Education } from '../components/models/education.models';
import { EducationListMy } from '../components/models/educationListMy.models';

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
   

  postEducation(educationToAdd:Education){
    educationToAdd.id=this.educationList.length;
    educationToAdd.imageUrl=educationToAdd.imageUrl==""||educationToAdd.imageUrl==null?"https://i.postimg.cc/MHZyq9ms/sin-imagen-chica.jpg":educationToAdd.imageUrl;
    //console.log(experieceToAdd.imageUrl);
    this.educationList.push(educationToAdd);
    this.educationList$.next(this.educationList);//con esto avisamos que ese array cambio
    educationToAdd=new Education;
    alert("Experiencia educativa agregada");
  }

  putEducation(educationEdited:Education){
    
    //this.experienceList[experienceId]=experienceEdited;
    educationEdited.imageUrl=educationEdited.imageUrl==""||educationEdited.imageUrl==null?"https://i.postimg.cc/MHZyq9ms/sin-imagen-chica.jpg":educationEdited.imageUrl;
    this.educationList[educationEdited.id]=educationEdited;
    //this.educationList.splice(educationEdited.id, 1, educationEdited)
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

  deleteEducation(eduToDelete:Education){
    if (window.confirm("Eliminar experiencia educativa en "+eduToDelete.name+" ?")){
    this.educationList = this.educationList.filter(education => education !== eduToDelete);
    //delete this.experienceList[expToDeleteId];
    for(let i=0;i<this.educationList.length;i++){
      this.educationList[i].id=i;
    }
    this.educationList$.next(this.educationList);
    alert("Experiencia educativa eliminada");
    }
  }

}
