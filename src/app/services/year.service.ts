import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Year } from '../components/models/year.models';

@Injectable({
  providedIn: 'root'
})
export class YearService {

  private actualYear: number;
  private selectedYear: number;
  private selectedYear$: Subject<Year>;

  private yearSinceList: Year[];


  private yearToList: Year[];
  private yearToList$: Subject<Year[]>;
  
  constructor() { 
    this.actualYear=new Date().getFullYear();
    this.yearSinceList=[];
    this.yearToList=[];
    this.yearToList$=new Subject();
  }

  getYearSinceList(){//lleno anio desde
    this.yearSinceList=[];
    for(let i=this.actualYear;i>(this.actualYear-35);i--){
      this.yearSinceList.push(new Year(i));
    }
    return this.yearSinceList;
  }

  getYearToList(selectedYear:number){//recibo anio seleccionado de anio desde
    this.yearToList=[];
    for(let i=this.actualYear;i>=selectedYear;i--){
      this.yearToList.push(new Year(i));
    }
    //console.log(this.yearToList);
    return this.yearToList;//notifico lista de anio hasta
  }
  

}
