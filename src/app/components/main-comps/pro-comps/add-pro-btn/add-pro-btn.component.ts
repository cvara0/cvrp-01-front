import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Project } from 'src/app/components/models/project.models';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-add-pro-btn',
  templateUrl: './add-pro-btn.component.html',
  styleUrls: ['./add-pro-btn.component.css']
})
export class AddProBtnComponent implements OnInit {

  closeResult = '';
  addProjectForm!  :FormGroup;
  newProject         :Project;
  
  model: NgbDateStruct;

  constructor(private fb:FormBuilder,private modalService: NgbModal,private projectService:ProjectService,private calendar: NgbCalendar) {
    
   }

  ngOnInit(): void {
    this.createAddProjectForm();
  }

/////////////////////////////////////////////////////////////////////////////////
//crear formulario de aniadir proyecto, validar y guardar
//////////////////////////////////////////////////////////////////////////////////
selectToday() {
  this.model = this.calendar.getToday();
  console.log(this.model.day);
  console.log(this.model.month);
  console.log(this.model.year);
}

createAddProjectForm(){
  
  this.addProjectForm=this.fb.group({
    proName         : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(80)]],//primera posicion valor por defecto, segunda, validadores sincronos, tercera validadores asincronos
    proWeb          : ['',[Validators.minLength(1),Validators.maxLength(2048),Validators.pattern('https?://.+')]],
    proDate         :[,[Validators.required]],
    proImage        : [''],
    proDescription  : ['',[Validators.maxLength(800)]],
  });
}

get validProName(){
  return this.addProjectForm.get('proName')?.invalid;
}

get validProDate(){
  return this.addProjectForm.get('proDate')?.invalid;
}

get validProWeb(){
  return this.addProjectForm.get('proWeb')?.invalid;
}


get validProDescription(){
  return this.addProjectForm.get('proDescription')?.invalid;
}



saveAddProject(){
 console.log(this.addProjectForm.get('proDate')?.value)
  this.projectService.postProject(
    new Project(
      0,
      this.addProjectForm.get('proName')?.value,
      this.addProjectForm.get('proWeb')?.value,
      this.addProjectForm.get('proDate')?.value.day
      +" / "
      +this.addProjectForm.get('proDate')?.value.month
      +" / "
      +this.addProjectForm.get('proDate')?.value.year,
      this.addProjectForm.get('proImage')?.value,
      this.addProjectForm.get('proDescription')?.value,
      false,
      0
    )
  ); 
  this.addProjectForm.reset();

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
