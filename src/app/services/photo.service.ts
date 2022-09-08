import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { Photo } from '../components/models/photo.models';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private photoList: Photo[];
  private photoList$: Subject<Photo[]>;

  public userId: string;

  private localhost;
  
  constructor(private http:HttpClient) { 
    this.localhost="http://localhost:8080";
    this.photoList=[];
    this.photoList$=new Subject();
   
  }

 
  postPhoto(photoToAdd:Photo){
    alert("Procesando informacion, puede tardar algunos segundos");
    photoToAdd.userId=Number(sessionStorage.getItem("userId"));
    return this.http.post(`${this.localhost}/photos`, photoToAdd).subscribe(resp=>{
    alert("Imagen de perfil");
    location.reload();});
  }


  putPhoto(photoToEdit:Photo){
    alert("Procesando informacion, puede tardar algunos segundos");
    return this.http.put(`${this.localhost}/photos`,photoToEdit).subscribe(resp=>{//+educationToEdit.id
      alert("Imagen de perfil editada");
      location.reload();
      });
  }


  getPhotoList$(): Observable<Photo[]>{
    return this.photoList$.asObservable();//esto permite desde afuera suscribirse y asi ver los cambios y recuperar los valores
  }

  getPhotoList(){//userId:string|nullTodo mandar todos los get como path variable home/1 home/2 etc
      return this.http.get(`${this.localhost}/photos/${this.userId}`)//(sessionStorage.getItem("userId")==null?'0':sessionStorage.getItem("userId"))
      .pipe(
        map(resp=>{
          this.photoList=this.createPhotoList(resp);
          this.photoList$.next(this.photoList);
        })
      );
  }

  private createPhotoList(photoListObj:any):Photo[]{
    const photoList:Photo[]=[];
    if(photoListObj===null){return [];}
    Object.keys(photoListObj).forEach(i=>{
      const pho:Photo=photoListObj[i];
      photoList.push(pho);
    })
    return photoList;
  }

  
  deletePhoto(photoToDelete:Photo){
    if (window.confirm("Eliminar imagen de perfil?")){
    return this.http.delete(`${this.localhost}/photos/${photoToDelete.id}`).subscribe(resp=>{
      alert("Imagen de perfil eliminada");
      location.reload();
    });
    }
    return null;
  }
}
