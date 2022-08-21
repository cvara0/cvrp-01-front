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
  skillUrlImage      : ['data:image/png;base64,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',Validators.required],
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
    this.addSkillForm.get('skillUrlImage')?.value
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
