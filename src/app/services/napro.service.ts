import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Napro } from '../components/models/napro.models';

@Injectable({
  providedIn: 'root'
})
export class NaproService {

  private napro: Napro;
  private napro$: Subject<Napro>;
  
  private naproToEdit: Napro;
  private naproToEdit$: Subject<Napro>;

  constructor() { 
    this.napro=new Napro();
    this.napro$=new Subject();
    this.naproToEdit=new Napro();
    this.naproToEdit$=new Subject();
  }

  putNapro(newNapro:Napro){
    this.napro=newNapro;
    this.napro$.next(this.napro);
    alert("Informacion personal editada");
  }

  getNapro$(): Observable<Napro>{
    return this.napro$.asObservable();
  }

}
