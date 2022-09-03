import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Education } from '../components/models/education.models';
import { EducationListMy } from '../components/models/educationListMy.models';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  //private readonly API='';//esto representa la url a la caul comunicarse

  private educationList: Education[];
  private educationList$: Subject<Education[]>;

  constructor(private http:HttpClient) {
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
    //this.http.put//ver
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
    //
    //this.educationList$.next(this.educationList);//nuevo
    return this.educationList$.asObservable();//esto permite desde afuera suscribirse y asi ver los cambios y recuperar los valores
  }

  getEducationList(){
      return this.http.get("http//localhost:8080/education").subscribe((eduList:any)=>{
        eduList.map((auxEdu:any)=>{
          let edu={
          id           : auxEdu.id,
          name         : auxEdu.name,
          carrer       : auxEdu.carrer,
          status       : auxEdu.status,
          web          : auxEdu.web,
          yearSince    : auxEdu.yearSince,
          yearTo       : auxEdu.yearTo,
          imageUrl     : auxEdu.imageUrl,
          description  : auxEdu.description,
          level        : auxEdu.level,
          }
          console.log(auxEdu.name);
          this.educationList.push(edu);
          this.educationList$.next(this.educationList);
        })
      })
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
