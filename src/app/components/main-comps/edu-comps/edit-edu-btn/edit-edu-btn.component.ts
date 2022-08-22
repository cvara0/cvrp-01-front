import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Education } from 'src/app/components/models/education.models';
import { Year } from 'src/app/components/models/year.models';
import { EducationService } from 'src/app/services/edu.service';
import { YearService } from 'src/app/services/year.service';

@Component({
  selector: 'app-edit-edu-btn',
  templateUrl: './edit-edu-btn.component.html'
})
export class EditEduBtnComponent implements OnInit {

  @Input() public educationToEdit : Education;
  yearSinceList:Year[];
  closeResult = '';
  editEducationForm!: FormGroup;
  educationLevel      :string[];

  constructor(private educationService:EducationService,public yearService:YearService,private fb:FormBuilder,private modalService: NgbModal) {
    
    //this.experienceToEdit=this.experienceService.getExperience(this.expToEditId);
    //console.log(this.experienceToEdit);
    this.yearSinceList=yearService.getYearSinceList();
    this.educationLevel=['Primario','Secundario','Terciario','Universitario','Curso'];

   }

  ngOnInit(): void {
    this.createEditEducationForm();
    
  }
  


  //////////////////////////////////////////////////////////////////////////////////
//crear formulario de editar experiencia laboral, validar y guardar
//////////////////////////////////////////////////////////////////////////////////
createEditEducationForm(){
 
  this.editEducationForm=this.fb.group({
    
    eduName         : [this.educationToEdit.name,[Validators.required,Validators.minLength(4),Validators.maxLength(80)]],//primera posicion valor por defecto, segunda, validadores sincronos, tercera validadores asincronos
    eduWeb          : [this.educationToEdit.web,[Validators.maxLength(2048),Validators.pattern('https?://.+')]],
    eduImage        : [this.educationToEdit.imageUrl=="https://i.postimg.cc/MHZyq9ms/sin-imagen-chica.jpg"?'':this.educationToEdit.imageUrl],
    eduYearSince    : [this.educationToEdit.yearSince,Validators.required],
    eduYearTo       : [this.educationToEdit.yearTo,Validators.required],
    eduDescription  : [this.educationToEdit.description,[Validators.maxLength(800)]],
    eduLevel        : [this.educationToEdit.level,Validators.required]
  });
}



get validEduName(){
  return this.editEducationForm.get('eduName')?.invalid;
}

get validEduWeb(){
  return this.editEducationForm.get('eduWeb')?.invalid;
}
get validEduYearSince(){
 return this.editEducationForm.get('eduYearSince')?.dirty;
}

get getYearToList():Year[]{
  return this.yearService.getYearToList(this.editEducationForm.get('eduYearSince')?.value);
}

get validEduYearTo(){
  return this.editEducationForm.get('eduYearTo')?.dirty;
}
get validEduDescription(){
  return this.editEducationForm.get('eduDescription')?.invalid;
}

get validEduLevel(){
  return this.editEducationForm.get('eduLevel')?.dirty;
}



saveEditEducation(){
  this.educationService.putEducation(
    new Education(
      this.educationToEdit.id,
      this.editEducationForm.get('eduName')?.value,
      this.editEducationForm.get('eduWeb')?.value,
      this.editEducationForm.get('eduYearSince')?.value,
      this.editEducationForm.get('eduYearTo')?.value,
      this.editEducationForm.get('eduImage')?.value,
      this.editEducationForm.get('eduDescription')?.value,
      this.editEducationForm.get('eduLevel')?.value,
    )
  );
  //this.editExperienceForm.reset;
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
