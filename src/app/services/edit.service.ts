import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {

 public userId:string;
  constructor() {
    
  }
  
  setIsEditAll(){
    
   //if(this.userId==sessionStorage.getItem("userId")){
    if(sessionStorage.getItem("editMode")!=="true"){
      //alert("Modo edicion activado");
      sessionStorage.setItem("editMode","true");
      location.reload();
    }
    else{
      //alert("Modo edicion desactivado");
      sessionStorage.setItem("editMode","false");
      location.reload();
    }
  //} else{
   // alert("No tiene permiso para editar esta informacion");
  //}  
}
}
