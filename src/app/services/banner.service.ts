import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Banner } from '../components/models/banner.models';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  private banner: Banner;
  private banner$: Subject<Banner>;
  
  private bannerToEdit: Banner;
  private bannerToEdit$: Subject<Banner>;

  constructor() { 
    this.banner=new Banner();//https://i.gifer.com/3OO15.gif
    this.banner$=new Subject();
    this.bannerToEdit=new Banner;
    this.bannerToEdit$=new Subject();
  }

  
  setBanner(newBanner:Banner){
    this.banner=newBanner;
    this.banner$.next(this.banner);//aviso al resto que algo cambio
    alert("Cambios guardados");
  }

  deleteBanner(){
    if (window.confirm("Eliminar imagen de portada?")){
    this.banner=new Banner("https://i.postimg.cc/zDdhTSjr/sin-imagen-grande.jpg");
    this.banner$.next(this.banner);
    alert("Portada eliminada");
   }
  }
  

  getBanner$(): Observable<Banner>{
    return this.banner$.asObservable();//esto permite desde afuera suscribirse y asi ver los cambios y recuperar los valores
  }
}
