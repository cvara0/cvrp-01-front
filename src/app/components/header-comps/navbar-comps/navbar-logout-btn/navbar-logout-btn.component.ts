import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbModal,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar-logout-btn',
  templateUrl: './navbar-logout-btn.component.html',
  styleUrls: ['./navbar-logout-btn.component.css']
})
export class NavbarLogoutBtnComponent implements OnInit {

  @Input() logoutIcon   : string="";
  loginForm!: FormGroup;
  closeResult = '';
 
  constructor(private modalService: NgbModal,private userService:UserService) {//public activeModal: NgbActiveModal 
    
  }

  ngOnInit(): void {
  }



saveLogout(){
  
  this.userService.logout 
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
