import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Experience } from 'src/app/components/models/experience.models';
import { Year } from 'src/app/components/models/year.models';
import { ExperienceService } from 'src/app/services/exp.service';
import { YearService } from 'src/app/services/year.service';
@Component({
  selector: 'app-add-exp-btn',
  templateUrl: './add-exp-btn.component.html'
})
export class AddExpBtnComponent implements OnInit {

  closeResult = '';
  addExperienceForm!  :FormGroup;
  newExperience       :Experience;
  yearSinceList       :Year[];
  yearToList          :Year[];
  yearSelected        :number;
  isLoading:boolean=false;

  constructor(private fb:FormBuilder,private modalService: NgbModal,private experienceService:ExperienceService,public yearService:YearService) {
    
    this.yearSinceList=yearService.getYearSinceList();
    this.yearToList=[];
   }

  ngOnInit(): void {
    this.createAddExperienceForm();
  }

/////////////////////////////////////////////////////////////////////////////////
//crear formulario de aniadir experiencia laboral, validar y guardar
//////////////////////////////////////////////////////////////////////////////////
createAddExperienceForm(){
  
  this.addExperienceForm=this.fb.group({
    expName         : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(80)]],//primera posicion valor por defecto, segunda, validadores sincronos, tercera validadores asincronos
    expWeb          : ['',[Validators.minLength(1),Validators.maxLength(2048),Validators.pattern('https?://.+')]],
    expPosition     : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(80)]],
    expYearSince    : [,[Validators.required]],
    expYearTo       : [,[Validators.required]],
    expImage        : [''],
    expDescription  : ['',[Validators.maxLength(800)]]
  });
}

get validExpName(){
  return this.addExperienceForm.get('expName')?.invalid;
}

get validExpWeb(){
  return this.addExperienceForm.get('expWeb')?.invalid;
}

get validExpPosition(){
  return this.addExperienceForm.get('expPosition')?.invalid;
}

get validExpYearSince(){
 return this.addExperienceForm.get('expYearSince')?.dirty;
}

get getYearToList():Year[]{
  return this.yearService.getYearToList(this.addExperienceForm.get('expYearSince')?.value);
}

get validExpYearTo(){
  return this.addExperienceForm.get('expYearTo')?.dirty;
}
get validExpDescription(){
  return this.addExperienceForm.get('expDescription')?.invalid;
}

saveAddExperience(){
  this.isLoading=true;
  this.experienceService.postExperience(
    new Experience(
      0,
      this.addExperienceForm.get('expName')?.value,
      this.addExperienceForm.get('expPosition')?.value,
      this.addExperienceForm.get('expWeb')?.value,
      this.addExperienceForm.get('expYearSince')?.value,
      this.addExperienceForm.get('expYearTo')?.value,
      this.addExperienceForm.get('expImage')?.value,
      this.addExperienceForm.get('expDescription')?.value,
      false,
      0
    )
  ).subscribe(resp=>{
    this.isLoading=false;
    location.reload();}); 
  this.addExperienceForm.reset();
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
