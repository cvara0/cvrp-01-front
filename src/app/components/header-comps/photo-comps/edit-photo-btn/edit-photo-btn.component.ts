import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Photo } from 'src/app/components/models/photo.models';
import { PhotoService } from 'src/app/services/photo.service';
@Component({
  selector: 'app-edit-photo-btn',
  templateUrl: './edit-photo-btn.component.html'
})
export class EditPhotoBtnComponent implements OnInit {

  closeResult = '';
  editPhotoForm!: FormGroup;
  urlPattern = '(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)';
  isLoading:boolean=false;

  @Input() photoToEdit: Photo;
  constructor(
    private fb:FormBuilder,private modalService: NgbModal,
    private photoService:PhotoService) { 
    
  }

  ngOnInit(): void {
    this.createEditPhotoForm();
  }

//////////////////////////////////////////////////////////////////////////////////
//crear formulario de editar foto perfil
//////////////////////////////////////////////////////////////////////////////////
createEditPhotoForm(){

  this.editPhotoForm=this.fb.group({
    //primera posicion valor por defecto, segunda, validadores sincronos, tercera validadores asincronos
    imageUrl       : ["",[Validators.nullValidator,Validators.required]]
  });
}

get validEditPhotoUrl(){
  return this.editPhotoForm.get('imageUrl')?.invalid;
}


saveEditPhoto(){
  this.isLoading=true;
if(this.photoToEdit==null){
      this.photoService.postPhoto(new Photo(
        0,
        this.editPhotoForm.get('imageUrl')?.value,
        false,
        0
      )).subscribe(resp=>{
        this.isLoading=true;
        location.reload();});
  }else{
    this.photoService.putPhoto(new Photo(
      this.photoToEdit.id,
      this.editPhotoForm.get('imageUrl')?.value,
      false,
      Number(sessionStorage.getItem("userId"))
    )).subscribe(resp=>{
      this.isLoading=true;
      location.reload();
      });
  }

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
