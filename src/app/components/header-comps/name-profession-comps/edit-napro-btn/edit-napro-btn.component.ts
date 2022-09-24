import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Napro } from 'src/app/components/models/napro.models';
import { CountryService } from 'src/app/services/country.service';
import { NaproService } from 'src/app/services/napro.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-edit-napro-btn',
  templateUrl: './edit-napro-btn.component.html'
})
export class EditNaproBtnComponent implements OnInit {

  closeResult = '';
  editNaproForm!: FormGroup;
  @Input() naproToEdit:Napro;
  isLoading:boolean=false;

  constructor(
    private fb:FormBuilder,
    private modalService: NgbModal,
    public countryService:CountryService,
    public naproService:NaproService,
    ) {
      
     }

  ngOnInit(): void {
    this.createEditNaproForm();
    this.countryService.getCountries();
  }


//////////////////////////////////////////////////////////////////////////////////
//crear formulario de nombre apellido, profesion,pais y bandera, validar y guardar
//////////////////////////////////////////////////////////////////////////////////
createEditNaproForm(){
  this.countryService.getCountries();
  this.countryService.countryArray;
  
  this.editNaproForm=this.fb.group({
    name            : [this.naproToEdit.name,[Validators.required,Validators.minLength(4),Validators.maxLength(80)]],//primera posicion valor por defecto, segunda, validadores sincronos, tercera validadores asincronos
    surname         : [this.naproToEdit.surname,[Validators.required,Validators.minLength(4),Validators.maxLength(80)]],
    profession      : [this.naproToEdit.profession,[Validators.required,Validators.minLength(4),Validators.maxLength(80)]],
    country         : [this.naproToEdit.country,[Validators.required]],
  });
}

get validEditNaproName(){
  return this.editNaproForm.get('name')?.invalid;
}

get validEditNaproSurname(){
  return this.editNaproForm.get('surname')?.invalid;
}

get validEditNaproProfession(){
  return this.editNaproForm.get('profession')?.invalid;
}

get validEditNaproCountryAndFlag(){
  return this.editNaproForm.get('country')?.invalid;
}

saveEditNapro(){
  this.isLoading=true;
  let flag;
  for(let country of this.countryService.countryArray){
    if(country.name==this.editNaproForm.get('country')?.value){
      flag=country.flag;
      break;
    }
      
  }

  this.naproService.putNapro(new Napro(
    this.naproToEdit.id,
    this.editNaproForm.get('name')?.value,
    this.editNaproForm.get('surname')?.value,
    this.editNaproForm.get('profession')?.value,
    this.editNaproForm.get('country')?.value,
    flag,
    false,
    Number(sessionStorage.getItem("userId"))
  )).subscribe(resp=>{
    this.isLoading=false;
    location.reload();
    });
 
  }

///////////////////////////////////////////////////////////////////////////////////
//lanza modal
//////////////////////////////////////////////////////////////////////////////////
 open(content:any) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}
//

}
