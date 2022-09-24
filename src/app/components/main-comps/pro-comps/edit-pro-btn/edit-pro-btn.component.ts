import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from 'src/app/components/models/project.models';
import { NgbModal, ModalDismissReasons, NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from 'src/app/services/project.service';
@Component({
  selector: 'app-edit-pro-btn',
  templateUrl: './edit-pro-btn.component.html',
  styleUrls: ['./edit-pro-btn.component.css']
})
export class EditProBtnComponent implements OnInit {

  @Input() public projectToEdit :Project;
  closeResult = '';
  editProjectForm!  :FormGroup;
  model: NgbDateStruct;
  isLoading:boolean=false;

  constructor(private fb:FormBuilder,private modalService: NgbModal,private projectService:ProjectService,private calendar: NgbCalendar) {
    
   }

  ngOnInit(): void {
    this.createEditProjectForm();
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

createEditProjectForm(){
  
  this.editProjectForm=this.fb.group({
    proName         : [this.projectToEdit.name,[Validators.required,Validators.minLength(4),Validators.maxLength(80)]],//primera posicion valor por defecto, segunda, validadores sincronos, tercera validadores asincronos
    proWeb          : [this.projectToEdit.web,[Validators.minLength(1),Validators.maxLength(2048),Validators.pattern('https?://.+')]],
    proDate         :[,[Validators.required]],
    proImage        : [this.projectToEdit.imageUrl=="https://i.postimg.cc/MHZyq9ms/sin-imagen-chica.jpg"?'':this.projectToEdit.imageUrl],
    proDescription  : [this.projectToEdit.description,[Validators.maxLength(800)]],
  });
}

get validProName(){
  return this.editProjectForm.get('proName')?.invalid;
}

get validProDate(){
  return this.editProjectForm.get('proDate')?.invalid;
}

get validProWeb(){
  return this.editProjectForm.get('proWeb')?.invalid;
}


get validProDescription(){
  return this.editProjectForm.get('proDescription')?.invalid;
}



saveEditProject(){
  this.isLoading=true;
  this.projectService.postProject(
    new Project(
      this.projectToEdit.id,
      this.editProjectForm.get('proName')?.value,
      this.editProjectForm.get('proWeb')?.value,
      this.editProjectForm.get('proDate')?.value.day
      +" / "
      +this.editProjectForm.get('proDate')?.value.month
      +" / "
      +this.editProjectForm.get('proDate')?.value.year,
      this.editProjectForm.get('proImage')?.value,
      this.editProjectForm.get('proDescription')?.value,
      false,
      Number(sessionStorage.getItem("userId"))
    )
  ).subscribe(resp=>{
    this.isLoading=false;
    location.reload();
    }); 
  this.editProjectForm.reset();
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
