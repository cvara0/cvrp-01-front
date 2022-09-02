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
    this.isEdit=false;
    this.editService.getIsEditAll$().subscribe(resp=>this.isEdit=resp);
    this.editConfirmIcon="https://i.postimg.cc/TPpTMdv5/editar.png";
  }

  ngOnInit(): void {
    
  }
 isEditOnOff(){
  this.editConfirmIcon=this.isEdit?"https://i.postimg.cc/TPpTMdv5/editar.png":"https://i.postimg.cc/QM60bDct/confirm.png";
  this.editService.setIsEditAll();
  
 }
 

}
