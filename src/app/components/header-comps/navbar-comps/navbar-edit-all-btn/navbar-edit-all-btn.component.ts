import { Component, Input, OnInit } from '@angular/core';
import { EditService } from 'src/app/services/edit.service';

@Component({
  selector: 'app-navbar-edit-all-btn',
  templateUrl: './navbar-edit-all-btn.component.html',
  styleUrls: ['./navbar-edit-all-btn.component.css']
})
export class NavbarEditAllBtnComponent implements OnInit {

  @Input() editAllIcon:string;
  isEdit:boolean;
  editConfirmIcon: string;

  constructor(public editService:EditService) { 
    this.isEdit=sessionStorage.getItem("editMode")==="true"?true:false;
    this.editConfirmIcon=sessionStorage.getItem("editMode")==="true"?"https://i.postimg.cc/QM60bDct/confirm.png":"https://i.postimg.cc/TPpTMdv5/editar.png";
  }

  ngOnInit(): void {
    
  }
 isEditOnOff(){
  
  this.editService.setIsEditAll();
  
 }
 

}
