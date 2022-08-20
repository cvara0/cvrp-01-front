import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-navbar-login-btn',
  templateUrl: './navbar-login-btn.component.html'
})
export class NavbarLoginBtnComponent implements OnInit {

  @Input() loginIcon   : string="";
  loginForm!: FormGroup;
  closeResult = '';
 
  constructor(private fb:FormBuilder,private modalService: NgbModal,private loginService:LoginService) { 
    this.createLoginForm();
  }

  ngOnInit(): void {
  }

//////////////////////////////////////////////////////////////////////////////////
//crear formulario de iniciar sesion, validar y guardar
//////////////////////////////////////////////////////////////////////////////////
createLoginForm(){
  this.loginForm=this.fb.group({
    emailLogin        : ['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    passwordLogin     : ['',[Validators.required,Validators.minLength(8),Validators.maxLength(80)]]
   
  });
}

get validLoginEmail(){
  return this.loginForm.get('emailLogin')?.invalid;
}
get validLoginPassword(){
  return this.loginForm.get('passwordLogin')?.invalid;
}

saveLogin(){
   //this.authService.login(this.loginForm.get('emailLogin')?.value,this.loginForm.get('passwordLogin')?.value);
  /*this.loginService.sharingObservableData={
   email:this.loginForm.get('emailLogin')?.value,
    password:this.loginForm.get('passwordLogin')?.value
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
