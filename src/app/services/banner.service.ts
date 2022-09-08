import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { Banner } from '../components/models/banner.models';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  private bannerList: Banner[];
  private bannerList$: Subject<Banner[]>;

  public userId: string;

  private localhost;
  
  constructor(private http:HttpClient) { 
    this.localhost="http://localhost:8080";
    this.bannerList=[];
    this.bannerList$=new Subject();
   
  }

 
  postBanner(bannerToAdd:Banner){
    alert("Procesando informacion, puede tardar algunos segundos");
    bannerToAdd.userId=Number(sessionStorage.getItem("userId"));
    return this.http.post(`${this.localhost}/banners`, bannerToAdd).subscribe(resp=>{
    alert("Imagen de portada guardada");
    location.reload();});
  }


  putBanner(bannerToEdit:Banner){
    alert("Procesando informacion, puede tardar algunos segundos");
    return this.http.put(`${this.localhost}/banners`,bannerToEdit).subscribe(resp=>{//+educationToEdit.id
      alert("Imagen de portada editada");
      location.reload();
      });
  }


  getBannerList$(): Observable<Banner[]>{
    return this.bannerList$.asObservable();//esto permite desde afuera suscribirse y asi ver los cambios y recuperar los valores
  }

  getBannerList(){//userId:string|nullTodo mandar todos los get como path variable home/1 home/2 etc
      return this.http.get(`${this.localhost}/banners/`+this.userId)//(sessionStorage.getItem("userId")==null?'0':sessionStorage.getItem("userId"))
      .pipe(
        map(resp=>{
          this.bannerList=this.createBannerList(resp);
          this.bannerList$.next(this.bannerList);
        })
      );
  }

  private createBannerList(bannerListObj:any):Banner[]{
    const bannerList:Banner[]=[];
    if(bannerListObj===null){return [];}
    Object.keys(bannerListObj).forEach(i=>{
      const ban:Banner=bannerListObj[i];
      bannerList.push(ban);
    })
    return bannerList;
  }

  
  deleteBanner(bannerToDelete:Banner){
    if (window.confirm("Eliminar imagen de portada?")){
    return this.http.delete(`${this.localhost}/banners/${bannerToDelete.id}`).subscribe(resp=>{
      alert("Imagen de portada eliminada");
      location.reload();
    });
    }
    
    return null;
  }
}
//https://i.gifer.com/3OO15.gif