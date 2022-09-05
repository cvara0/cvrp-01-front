import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Education } from 'src/app/components/models/education.models';
import { User } from 'src/app/components/models/user.models';
import { Year } from 'src/app/components/models/year.models';
import { EducationService } from 'src/app/services/edu.service';
import { YearService } from 'src/app/services/year.service';
@Component({
  selector: 'app-add-edu-btn',
  templateUrl: './add-edu-btn.component.html'
})
export class AddEduBtnComponent implements OnInit {

  closeResult = '';
  addEducationForm!   :FormGroup;
  newEducation        :Education;
  yearSinceList       :Year[];
  yearToList          :Year[];
  yearSelected        :number;
  educationLevel      :string[];
  educationStatus     :string[];

  constructor(private fb:FormBuilder,private modalService: NgbModal,private educationService:EducationService,public yearService:YearService) {
    this.yearSinceList=yearService.getYearSinceList();
    this.yearToList=[];
    this.educationLevel=['Primario','Secundario','Terciario','Universitario','Curso'];
    this.educationStatus=['Experiencia','Cursando','Finalizando','Finalizada'];
   }

  ngOnInit(): void {
    this.createAddEducationForm();
  }

/////////////////////////////////////////////////////////////////////////////////
//crear formulario de aniadir experiencia laboral, validar y guardar
//////////////////////////////////////////////////////////////////////////////////
createAddEducationForm(){
  
  this.addEducationForm=this.fb.group({
    eduName         : ['eduName',[Validators.required,Validators.minLength(4),Validators.maxLength(80)]],//primera posicion valor por defecto, segunda, validadores sincronos, tercera validadores asincronos
    eduCarrer       : ['eduCarrer',[Validators.required,Validators.minLength(4),Validators.maxLength(80)]],
    eduStatus       : [,[Validators.required]],
    eduWeb          : ['',[Validators.minLength(1),Validators.maxLength(2048),Validators.pattern('https?://.+')]],
    eduYearSince    : [,[Validators.required]],
    eduYearTo       : [,[Validators.required]],
    eduImage        : [''],
    eduDescription  : ['',[Validators.maxLength(800)]],
    eduLevel        :[,[Validators.required]],
    
  });
}

get validEduName(){
  return this.addEducationForm.get('eduName')?.invalid;
}

get validEduCarrer(){
  return this.addEducationForm.get('eduCarrer')?.invalid;
}

get validEduStatus(){
  return this.addEducationForm.get('eduStatus')?.dirty;
}

get validEduWeb(){
  return this.addEducationForm.get('eduWeb')?.invalid;
}
get validEduYearSince(){
 return this.addEducationForm.get('eduYearSince')?.dirty;
}

get getYearToList():Year[]{
  return this.yearService.getYearToList(this.addEducationForm.get('eduYearSince')?.value);
}

get validEduYearTo(){
  return this.addEducationForm.get('eduYearTo')?.dirty;
}
get validEduDescription(){
  return this.addEducationForm.get('eduDescription')?.invalid;
}

get validEduLevel(){
  return this.addEducationForm.get('eduLevel')?.dirty;
}

saveAddEducation(){
 
  this.educationService.postEducation(
    new Education(
      0,
      this.addEducationForm.get('eduName')?.value,
      this.addEducationForm.get('eduCarrer')?.value,
      this.addEducationForm.get('eduStatus')?.value,
      this.addEducationForm.get('eduWeb')?.value,
      this.addEducationForm.get('eduYearSince')?.value,
      this.addEducationForm.get('eduYearTo')?.value,
      this.addEducationForm.get('eduImage')?.value,
      this.addEducationForm.get('eduDescription')?.value,
      this.addEducationForm.get('eduLevel')?.value,
      false,
      Number(sessionStorage.getItem("userId"))
    )
  ); 
  this.addEducationForm.reset();
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

}
