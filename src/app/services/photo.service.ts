import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Photo } from '../components/models/photo.models';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private photo: Photo;
  private photo$: Subject<Photo>;
  
  private photoToEdit: Photo;
  private photoToEdit$: Subject<Photo>;

  constructor() { 
    this.photo=new Photo();//https://i.gifer.com/3OO15.gif
    this.photo$=new Subject();
    this.photoToEdit=new Photo;
    this.photoToEdit$=new Subject();
  }

  
  putPhoto(newPhoto:Photo){
    this.photo=newPhoto;
    this.photo$.next(this.photo);//aviso al resto que algo cambio
    alert("Imagen de perfil editada");
  }

  getPhoto$(): Observable<Photo>{
    return this.photo$.asObservable();//esto permite desde afuera suscribirse y asi ver los cambios y recuperar los valores
  }
}
