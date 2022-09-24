import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { About } from '../components/models/about.models';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private aboutList: About[];
  private aboutList$: Subject<About[]>;

  public userId: string;

  private localhost;
  
  constructor(private http:HttpClient) { 
    this.localhost="https://porfolio-ap-back-cvrp.herokuapp.com";
    this.aboutList=[];
    this.aboutList$=new Subject();
   
  }

 
  postAbout(aboutToAdd:About){
    aboutToAdd.userId=Number(this.userId);
    return this.http.post(`${this.localhost}/abouts`, aboutToAdd);
  }


  putAbout(aboutToEdit:About){
    return this.http.put(`${this.localhost}/abouts`,aboutToEdit);
  }


  getAboutList$(): Observable<About[]>{
    return this.aboutList$.asObservable();//esto permite desde afuera suscribirse y asi ver los cambios y recuperar los valores
  }

  getAboutList(){//userId:string|nullTodo mandar todos los get como path variable home/1 home/2 etc
      return this.http.get(`${this.localhost}/abouts/${(this.userId?this.userId:"1")}`)//(sessionStorage.getItem("userId")==null?'0':sessionStorage.getItem("userId"))
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
    
    return this.http.delete(`${this.localhost}/abouts/${aboutToDelete.id}`)
    
  }

}
