import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {

 
  constructor() {
    
  }
  
  setIsEditAll(){
    if(sessionStorage.getItem("editMode")!=="true"){
      alert("Modo edicion activado");
      sessionStorage.setItem("editMode","true");
      location.reload();
    }
    else{
      alert("Modo edicion desactivado");
      sessionStorage.setItem("editMode","false");
      location.reload();
    }
  }
}
