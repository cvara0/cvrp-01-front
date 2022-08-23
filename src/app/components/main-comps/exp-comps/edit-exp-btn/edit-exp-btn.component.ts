import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Experience } from 'src/app/components/models/experience.models';
import { Year } from 'src/app/components/models/year.models';
import { ExperienceService } from 'src/app/services/exp.service';
import { YearService } from 'src/app/services/year.service';
@Component({
  selector: 'app-edit-exp-btn',
  templateUrl: './edit-exp-btn.component.html'
})
export class EditExpBtnComponent implements OnInit {
  
  @Input() public experienceToEdit : Experience;
  yearSinceList:Year[];
  closeResult = '';
  editExperienceForm!: FormGroup;

  constructor(private experienceService:ExperienceService,public yearService:YearService,private fb:FormBuilder,private modalService: NgbModal) {
    
    //this.experienceToEdit=this.experienceService.getExperience(this.expToEditId);
    //console.log(this.experienceToEdit);
    this.yearSinceList=yearService.getYearSinceList();

   }

  ngOnInit(): void {
    this.createEditExperienceForm();
    
  }
  
  


  //////////////////////////////////////////////////////////////////////////////////
//crear formulario de editar experiencia laboral, validar y guardar
//////////////////////////////////////////////////////////////////////////////////
createEditExperienceForm(){
 
  this.editExperienceForm=this.fb.group({
    
    expName         : [this.experienceToEdit.name,[Validators.required,Validators.minLength(4),Validators.maxLength(80)]],//primera posicion valor por defecto, segunda, validadores sincronos, tercera validadores asincronos
    expPosition     : [this.experienceToEdit.position,[Validators.required,Validators.minLength(4),Validators.maxLength(80)]],
    expWeb          : [this.experienceToEdit.web,[Validators.maxLength(2048),Validators.pattern('https?://.+')]],
    expImage        : [this.experienceToEdit.imageUrl=="https://i.postimg.cc/MHZyq9ms/sin-imagen-chica.jpg"?'':this.experienceToEdit.imageUrl],
    expYearSince    : [this.experienceToEdit.yearSince,Validators.required],
    expYearTo       : [this.experienceToEdit.yearTo,Validators.required],
    expDescription  : [this.experienceToEdit.description,[Validators.maxLength(800)]]
  });
}



get validExpName(){
  return this.editExperienceForm.get('expName')?.invalid;
}

get validExpWeb(){
  return this.editExperienceForm.get('expWeb')?.invalid;
}

get validExpPosition(){
  return this.editExperienceForm.get('expPosition')?.invalid;
}

get validExpYearSince(){
  return this.editExperienceForm.get('expYearSince')?.dirty;
 }
 
 get getYearToList():Year[]{
   return this.yearService.getYearToList(this.editExperienceForm.get('expYearSince')?.value);
 }
 
 get validExpYearTo(){
   return this.editExperienceForm.get('expYearTo')?.dirty;
 }
get validExpDescription(){
  return this.editExperienceForm.get('expDescription')?.invalid;
}



saveEditExperience(){
  this.experienceService.putExperience(
    new Experience(
      this.experienceToEdit.id,
      this.editExperienceForm.get('expName')?.value,
      this.editExperienceForm.get('expWeb')?.value,
      this.editExperienceForm.get('expYearSince')?.value,
      this.editExperienceForm.get('expYearTo')?.value,
      this.editExperienceForm.get('expImage')?.value,
      this.editExperienceForm.get('expDescription')?.value,
    )
  );

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
