import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Napro } from 'src/app/components/models/napro.models';
import { CountryService } from 'src/app/services/country.service';
import { NaproService } from 'src/app/services/napro.service';

@Component({
  selector: 'app-add-napro-btn',
  templateUrl: './add-napro-btn.component.html'
})
export class AddNaproBtnComponent implements OnInit {

  closeResult = '';
  addNaproForm!: FormGroup;
  isLoading:boolean=false;
  constructor(
    private fb:FormBuilder,
    private modalService: NgbModal,
    private naproService:NaproService,
    public countryService:CountryService
    ) { 
    
  }

  ngOnInit(): void {
    this.createAddNaproForm();
    this.countryService.getCountries();
  }

//////////////////////////////////////////////////////////////////////////////////
//crear formulario aniadir napro
//////////////////////////////////////////////////////////////////////////////////
createAddNaproForm(){

  this.addNaproForm=this.fb.group({
    name            : ["",[Validators.required,Validators.minLength(4),Validators.maxLength(80)]],//primera posicion valor por defecto, segunda, validadores sincronos, tercera validadores asincronos
    surname         : ["",[Validators.required,Validators.minLength(4),Validators.maxLength(80)]],
    profession      : ["",[Validators.required,Validators.minLength(4),Validators.maxLength(80)]],
    country         : ["",[Validators.required]],
  });
}

get validAddNaproName(){
  return this.addNaproForm.get('name')?.invalid;
}

get validAddNaproSurname(){
  return this.addNaproForm.get('surname')?.invalid;
}

get validAddNaproProfession(){
  return this.addNaproForm.get('profession')?.invalid;
}

get validAddNaproCountryAndFlag(){
  return this.addNaproForm.get('country')?.invalid;
}


saveAddNapro(){
  this.isLoading=true;
  let flag;
  for(let country of this.countryService.countryArray){
    if(country.name==this.addNaproForm.get('country')?.value){
      flag=country.flag;
      break;
    }
      
  }

  this.naproService.postNapro(new Napro(
    0, 
    this.addNaproForm.get('name')?.value,
    this.addNaproForm.get('surname')?.value,
    this.addNaproForm.get('profession')?.value,
    this.addNaproForm.get('country')?.value,
    flag,
    false,
    0
  )).subscribe(resp=>{
    this.isLoading=false;
    location.reload();});
  }

  /////////////////////////////////////////////////////////////////////////////////
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
