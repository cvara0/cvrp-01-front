import { Component, OnInit } from '@angular/core';
import { Napro } from 'src/app/components/models/napro.models';
import { CountryService } from 'src/app/services/country.service';
import { EditService } from 'src/app/services/edit.service';
import { NaproService } from 'src/app/services/napro.service';

@Component({
  selector: 'app-name-profession',
  templateUrl: './name-profession.component.html'
})
export class NameProfessionComponent implements OnInit {

  naproList         : Napro[];
  isEditAll         : boolean;
  constructor(private naproService:NaproService,private editService:EditService,private countryService:CountryService) {
    this.naproService.getNaproList();
    this.naproList=[];
    this.naproService.getNaproList$().subscribe(naproList=>{
    this.naproList=naproList;
    });
    this.isEditAll=sessionStorage.getItem("editMode")=="true"&&sessionStorage.getItem("userId")==this.editService.userId?true:false;//si esta en otra cuenta que ni aprezca el de editar

   }
  ngOnInit(): void {
    this.naproService.getNaproList().subscribe(); 
  }


}
