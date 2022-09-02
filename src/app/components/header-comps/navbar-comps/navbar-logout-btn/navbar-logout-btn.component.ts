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

logout(){
  
  this.userService.logout();
}


}
