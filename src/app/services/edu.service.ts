import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Education } from '../components/models/education.models';
import { EducationListMy } from '../components/models/educationListMy.models';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private localhost;

  private educationList: Education[];
  private educationList$: Subject<Education[]>;

  constructor(private http:HttpClient) {
    this.localhost="http://localhost:8080"
    this.educationList=[];
    this.educationList$=new Subject();
    
   }
   

  postEducation(educationToAdd:Education){
   
    educationToAdd.imageUrl=educationToAdd.imageUrl==""||educationToAdd.imageUrl==null?"https://i.postimg.cc/MHZyq9ms/sin-imagen-chica.jpg":educationToAdd.imageUrl;
    return this.http.post(this.localhost+"/educations", educationToAdd).subscribe(resp=>{
    alert("Experiencia educativa agregada");
    location.reload();});
  }

  putEducation(educationToEdit:Education){
    
    educationToEdit.imageUrl=educationToEdit.imageUrl==""||educationToEdit.imageUrl==null?"https://i.postimg.cc/MHZyq9ms/sin-imagen-chica.jpg":educationToEdit.imageUrl;
    return this.http.put(this.localhost+"/educations",educationToEdit).subscribe(resp=>{//+educationToEdit.id
      alert("Experiencia educativa editada");
      location.reload();
      });
  }

  getEducation(educationId:number){
    return this.educationList[educationId];
  }

  getEducationList$(): Observable<Education[]>{
    return this.educationList$.asObservable();//esto permite desde afuera suscribirse y asi ver los cambios y recuperar los valores
  }

  getEducationList(){
      return this.http.get(this.localhost+"/educations/"+(sessionStorage.getItem("userId")==null?'0':sessionStorage.getItem("userId")))
      .pipe(
        map(resp=>{
          this.educationList=this.createEduList(resp);
          this.educationList$.next(this.educationList);
        })//map transforma la info en fuincion de un metodo y regresa algo
      );
  }

  private createEduList(eduListObj:any):Education[]{
    const eduList:Education[]=[];
    if(eduListObj===null){return [];}
    Object.keys(eduListObj).forEach(i=>{
      const edu:Education=eduListObj[i];
      //edu.id=Number(i); si quiero cambiar los id
      eduList.push(edu);
    })
    return eduList;
  }

  deleteEducation(eduToDelete:Education){
    if (window.confirm("Eliminar experiencia educativa en "+eduToDelete.name+" ?")){
    this.educationList = this.educationList.filter(education => education !== eduToDelete);
    //delete this.experienceList[expToDeleteId];
    for(let i=0;i<this.educationList.length;i++){
      //this.educationList[i].id=i;
    }
    this.educationList$.next(this.educationList);
    alert("Experiencia educativa eliminada");
    }
  }

}
