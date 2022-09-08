import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Banner } from 'src/app/components/models/banner.models';
import { BannerService } from 'src/app/services/banner.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-edit-banner-btn',
  templateUrl: './edit-banner-btn.component.html'
})
export class EditBannerBtnComponent implements OnInit {

  @Input() bannerToEdit :Banner; 
  closeResult = '';
  editBannerForm!: FormGroup;
  urlPattern = '(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)';

  constructor(
    private fb:FormBuilder,private modalService: NgbModal,
    private bannerService:BannerService) { 
    
  }

  ngOnInit(): void {
    this.createEditBannerForm();
  }

//////////////////////////////////////////////////////////////////////////////////
//crear formulario de editar banner
//////////////////////////////////////////////////////////////////////////////////
createEditBannerForm(){

  this.editBannerForm=this.fb.group({
    //primera posicion valor por defecto, segunda, validadores sincronos, tercera validadores asincronos
    imageUrl       : ["",[Validators.nullValidator,Validators.required]]
  });
}

get validEditBannerUrl(){
  return this.editBannerForm.get('imageUrl')?.invalid;
}


saveEditBanner(){

  this.bannerService.postBanner(new Banner(
    0,
    this.editBannerForm.get('imageUrl')?.value,
    false,
    0
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
