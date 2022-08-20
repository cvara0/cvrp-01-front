import { Component, OnInit } from '@angular/core';
import { Napro } from 'src/app/components/models/napro.models';
import { CountryService } from 'src/app/services/country.service';
import { NaproService } from 'src/app/services/napro.service';

@Component({
  selector: 'app-name-profession',
  templateUrl: './name-profession.component.html'
})
export class NameProfessionComponent implements OnInit {

  napro         : Napro=new Napro();
  
  constructor(private naproService:NaproService,private countryService:CountryService) {
    
    this.naproService.getNapro$().subscribe(napro=>{
      this.napro=napro;
    });
    //console.log(this.napro);
   }

  ngOnInit(): void {
  }

}
