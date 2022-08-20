import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { About } from '../components/models/about.models';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private about: About;
  private about$: Subject<About>;
  
  private aboutToEdit: About;
  private aboutToEdit$: Subject<About>;

  constructor() { 
    this.about=new About();//https://i.gifer.com/3OO15.gif
    this.about$=new Subject();
    this.aboutToEdit=new About;
    this.aboutToEdit$=new Subject();
  }

  postAbout(newAbout:About){
    this.about=newAbout;
    this.about$.next(this.about);//aviso al resto que algo cambio
    alert("'Acerca de...' guardado");
  }

  deleteAbout(){
    if (window.confirm("Eliminar acerca de...?")){
    this.about=new About("",true);
    this.about$.next(this.about);
    alert("'Acerca de...' eliminado");
    }
  }
  

  getAbout$(): Observable<About>{
    return this.about$.asObservable();//esto permite desde afuera suscribirse y asi ver los cambios y recuperar los valores
  }
}
