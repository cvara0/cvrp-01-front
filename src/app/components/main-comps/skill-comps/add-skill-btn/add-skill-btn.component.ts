import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill } from 'src/app/components/models/skill.models';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SkillService } from 'src/app/services/skill.service';
@Component({
  selector: 'app-add-skill-btn',
  templateUrl: './add-skill-btn.component.html'
})
export class AddSkillBtnComponent implements OnInit {

closeResult = '';
addSkillForm!    :FormGroup;
newSkill              :Skill;
levelList            :Number[];
@Input() isHardSkill :boolean;

constructor(private fb:FormBuilder,private modalService: NgbModal,private skillService:SkillService) {
    this.levelList=[1,2,3,4,5,6,7,8];
 }

ngOnInit(): void {
  this.createAddSkillForm();
}

/////////////////////////////////////////////////////////////////////////////////
//crear formulario de aniadir hard skill, validar y guardar
//////////////////////////////////////////////////////////////////////////////////
createAddSkillForm(){

this.addSkillForm=this.fb.group({
  skillName          : ['springboot',[Validators.required,Validators.minLength(4),Validators.maxLength(20)]],//primera posicion valor por defecto, segunda, validadores sincronos, tercera validadores asincronos
  skillLevel         : [8,Validators.required],
  skillUrlImage      : ['',Validators.required],
  skillWeb           : ['',Validators.required],
});
}

get validSkillName(){
return this.addSkillForm.get('skillName')?.invalid;
}

get validSkillLevel(){
return this.addSkillForm.get('skillLevel')?.dirty;
}

saveAddSkill(){

this.skillService.postSkill(
  new Skill(
    0,
    this.addSkillForm.get('skillName')?.value,
    this.addSkillForm.get('skillLevel')?.value,
    this.isHardSkill,
    this.addSkillForm.get('skillUrlImage')?.value,
    this.addSkillForm.get('skillWeb')?.value
  )
); 
this.addSkillForm.reset();
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
