import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  private isEditAll: boolean;
  private isEditAll$:Subject<boolean>;

  constructor() {
    this.isEditAll=false;
    this.isEditAll$=new Subject();
  }
  getIsEditAll$(): Observable<boolean>{
    return this.isEditAll$.asObservable();//esto permite desde afuera suscribirse y asi ver los cambios y recuperar los valores
  }

  setIsEditAll(){
    if(!this.isEditAll)
      alert("Activado modo edicion");
    else
      alert("Guardando cambios, puede tardar unos segundos");
    this.isEditAll=!this.isEditAll;
    this.isEditAll$.next(this.isEditAll);
  }
}
