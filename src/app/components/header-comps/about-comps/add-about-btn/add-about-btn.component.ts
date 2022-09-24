import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { About } from 'src/app/components/models/about.models';
import { AboutService } from 'src/app/services/about.service';
@Component({
  selector: 'app-add-about-btn',
  templateUrl: './add-about-btn.component.html'
})
export class AddAboutBtnComponent implements OnInit {

  closeResult = '';
  addAboutForm!: FormGroup;
  isLoading:boolean=false;
  
  constructor(
    private fb:FormBuilder,private modalService: NgbModal,
    private aboutService:AboutService) { 
    
  }

  ngOnInit(): void {
    this.createAddAboutForm();
  }

//////////////////////////////////////////////////////////////////////////////////
//crear formulario aniadir about
//////////////////////////////////////////////////////////////////////////////////
createAddAboutForm(){

  this.addAboutForm=this.fb.group({
    //primera posicion valor por defecto, segunda, validadores sincronos, tercera validadores asincronos
    aboutText       : ['',[Validators.maxLength(800),Validators.minLength(20),Validators.nullValidator,Validators.required]]
  });
}

get validAddAbout(){
  return this.addAboutForm.get('aboutText')?.invalid;
}


saveAddAbout(){
  this.isLoading=true;
  this.aboutService.postAbout(new About(
    0,
    this.addAboutForm.get('aboutText')?.value,
    false,
    0
  )).subscribe(resp=>{
      this.isLoading=false;
      location.reload();
    });
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
