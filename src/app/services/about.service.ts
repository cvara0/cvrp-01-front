import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { About } from '../components/models/about.models';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private aboutList: About[];
  private aboutList$: Subject<About[]>;

  private localhost;
  
  constructor(private http:HttpClient) { 
    this.localhost="http://localhost:8080";
    this.aboutList=[];
    this.aboutList$=new Subject();
  }

 
  postAbout(aboutToAdd:About){
    aboutToAdd.userId=Number(sessionStorage.getItem("userId"));
    return this.http.post(this.localhost+"/abouts", aboutToAdd).subscribe(resp=>{
    alert("'Acerca de...' guardado");
    location.reload();});
  }


  putAbout(aboutToEdit:About){
    
    return this.http.put(this.localhost+"/abouts",aboutToEdit).subscribe(resp=>{//+educationToEdit.id
      alert("'Acerca de...' editado");
      location.reload();
      });
  }


  getAboutList$(): Observable<About[]>{
    return this.aboutList$.asObservable();//esto permite desde afuera suscribirse y asi ver los cambios y recuperar los valores
  }

  getAboutList(){
      return this.http.get(this.localhost+"/abouts/"+1)//(sessionStorage.getItem("userId")==null?'0':sessionStorage.getItem("userId"))
      .pipe(
        map(resp=>{
          this.aboutList=this.createAboutList(resp);
          this.aboutList$.next(this.aboutList);
        })
      );
  }

  private createAboutList(aboutListObj:any):About[]{
    const aboutList:About[]=[];
    if(aboutListObj===null){return [];}
    Object.keys(aboutListObj).forEach(i=>{
      const abo:About=aboutListObj[i];
      aboutList.push(abo);
    })
    return aboutList;
  }

  
  deleteAbout(aboutToDelete:About){
    if (window.confirm("Eliminar acerca de...?")){
    return this.http.delete(this.localhost+"/abouts/"+aboutToDelete.id).subscribe(resp=>{
      alert("Acerca de...a eliminado");
      location.reload();
    });
    }
    return null;
  }

}
