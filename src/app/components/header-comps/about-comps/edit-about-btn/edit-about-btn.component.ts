import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { About } from 'src/app/components/models/about.models';
import { AboutService } from 'src/app/services/about.service';
@Component({
  selector: 'app-edit-about-btn',
  templateUrl: './edit-about-btn.component.html'
})
export class EditAboutBtnComponent implements OnInit {

  closeResult = '';
  editAboutForm!: FormGroup;
  @Input() aboutToEdit: About;
  constructor(
    private fb:FormBuilder,private modalService: NgbModal,
    private aboutService:AboutService) { 
    
  }

  ngOnInit(): void {
    this.createEditAboutForm();
  }

//////////////////////////////////////////////////////////////////////////////////
//crear formulario de editar about
//////////////////////////////////////////////////////////////////////////////////
createEditAboutForm(){

  this.editAboutForm=this.fb.group({
    //primera posicion valor por defecto, segunda, validadores sincronos, tercera validadores asincronos
    aboutText       : [this.aboutToEdit.aboutText,[Validators.maxLength(800)]]
  });
}

get validEditAbout(){
  return this.editAboutForm.get('aboutText')?.invalid;
}


saveEditAbout(){

  this.aboutService.postAbout(new About(
    this.aboutToEdit.id,
    this.editAboutForm.get('aboutText')?.value,
    false,
    Number(sessionStorage.getItem("userId"))
  ));
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
