import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-navbar-register-btn',
  templateUrl: './navbar-register-btn.component.html'
})
export class NavbarRegisterBtnComponent implements OnInit {


  @Input() registerIcon   : string="";
  registerForm!: FormGroup;
  closeResult = '';

  constructor(private fb:FormBuilder,private modalService: NgbModal) { 
    this.createRegisterForm();
  }

  ngOnInit(): void {
  }

  //////////////////////////////////////////////////////////////////////////////////
//crear formulario de registro, validar y guardar
//////////////////////////////////////////////////////////////////////////////////
createRegisterForm(){
  this.registerForm=this.fb.group({
    nameRegister         : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(80)]],//primera posicion valor por defecto, segunda, validadores sincronos, tercera validadores asincronos
    surnameRegister      : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(80)]],
    emailRegister        : ['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    passwordRegister     : ['',[Validators.required,Validators.minLength(8),Validators.maxLength(80)]]
   
  });
}

get validRegisterName(){
  return this.registerForm.get('nameRegister')?.invalid;
}

get validRegisterSurname(){
  return this.registerForm.get('surnameRegister')?.invalid;
}

get validRegisterEmail(){
  return this.registerForm.get('emailRegister')?.invalid;
}
get validRegisterPassword(){
  return this.registerForm.get('passwordRegister')?.invalid;
}

saveRegister(){
   /*
  this.registerService.sharingObservableData={
    name:this.registerForm.get('name')?.value,
    surname:this.registerForm.get('surname')?.value,
    email:this.registerForm.get('email')?.value,
    password:this.registerForm.get('password')?.value
  };*/
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
