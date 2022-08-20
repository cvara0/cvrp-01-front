import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countryArray:any=[];
  
  constructor( private http:HttpClient) { }

  getCountries(){
    return this.http.get('https://restcountries.com/v3.1/all').subscribe((countryList:any)=>{
      countryList.map((auxCountry:any)=>{
        let country={
          name:auxCountry.name.common,
          flag:auxCountry.flags.svg
        }
        this.countryArray.push(country);
      })
    })
  }


}
