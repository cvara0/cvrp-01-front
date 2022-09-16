import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { delay } from 'rxjs';
import { Login } from 'src/app/components/models/login.models';
import { User } from 'src/app/components/models/user.models';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-navbar-login-btn',
  templateUrl: './navbar-login-btn.component.html'
})
export class NavbarLoginBtnComponent implements OnInit {

  @Input() loginIcon   : string="";
  loginForm!: FormGroup;
  closeResult = '';
  isLoading:boolean=false;
 
  constructor(private fb:FormBuilder,private modalService: NgbModal,private userService:UserService) { 
    this.createLoginForm();
  }

  ngOnInit(): void {
  }

//////////////////////////////////////////////////////////////////////////////////
//crear formulario de iniciar sesion, validar y guardar
//////////////////////////////////////////////////////////////////////////////////
createLoginForm(){
  this.loginForm=this.fb.group({
    emailLogin        : ['usuario1@usuario.com',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    passwordLogin     : ['123456789',[Validators.required,Validators.minLength(8),Validators.maxLength(80)]]
   
  });
}

get validLoginEmail(){
  return this.loginForm.get('emailLogin')?.invalid;
}
get validLoginPassword(){
  return this.loginForm.get('passwordLogin')?.invalid;
}

saveLogin(){
  this.isLoading=true;
  
  this.userService.login(
    new Login(
      this.loginForm.get('emailLogin')?.value,
    this.loginForm.get('passwordLogin')?.value)
    ).subscribe(resp=>{
      if(resp!==null){
        
        sessionStorage.setItem("userId",resp.toString());
        console.log(resp.toString());
        window.location.href=`/home/${resp}`;//this.router.navigate(['/home',resp]); dejo pa saber
      }
      this.isLoading=false;
      
      return resp==null?alert("No existe usuari@ con este email!"):null;});
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
