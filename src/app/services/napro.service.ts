import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { Napro } from '../components/models/napro.models';

@Injectable({
  providedIn: 'root'
})
export class NaproService {

  private naproList: Napro[];
  private naproList$: Subject<Napro[]>;

  public userId: string;

  private localhost;
  
  constructor(private http:HttpClient) { 
    this.localhost="https://porfolio-ap-back-cvrp.herokuapp.com";
    this.naproList=[];
    this.naproList$=new Subject();
   
  }

 
  postNapro(naproToAdd:Napro){
    naproToAdd.userId=Number(sessionStorage.getItem("userId"));
    return this.http.post(this.localhost+"/napros", naproToAdd);
  }


  putNapro(naproToEdit:Napro){
    
    return this.http.put(this.localhost+"/napros",naproToEdit);
  }


  getNaproList$(): Observable<Napro[]>{
    return this.naproList$.asObservable();
  }

  getNaproList(){
      return this.http.get(`${this.localhost}/napros/${(this.userId?this.userId:"1")}`)
      .pipe(
        map(resp=>{
          this.naproList=this.createNaproList(resp);
          this.naproList$.next(this.naproList);
        })
      );
  }

  private createNaproList(naproListObj:any):Napro[]{
    const naproList:Napro[]=[];
    if(naproListObj===null){return [];}
    Object.keys(naproListObj).forEach(i=>{
      const nap:Napro=naproListObj[i];
      naproList.push(nap);
    })
    return naproList;
  }

  
  deleteNapro(naproToDelete:Napro){
    
    return this.http.delete(this.localhost+"/napros/"+naproToDelete.id);
    
  }

}
