import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/components/models/about.models';
import { AboutService } from 'src/app/services/about.service';
import { EditService } from 'src/app/services/edit.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  aboutList         : About[];
  isEditAll         : boolean;
  constructor(private aboutService:AboutService,private editService:EditService) {
    this.aboutService.getAboutList();

    this.aboutList=[new About(
      1,
      `Mi vida se resume en la búsqueda del equilibrio entre lógica y la creatividad, a la vez de sentirme útil y hacer un bien a la sociedad. 
      Hoy encontré mi camino en el desarrollo de software.`,
      false,
      1
      )];

    /*this.aboutService.getAboutList$().subscribe(aboutList=>{
      this.aboutList=aboutList;
    });*/
    this.isEditAll=sessionStorage.getItem("editMode")=="true"&&sessionStorage.getItem("userId")==this.editService.userId?true:false;//si esta en otra cuenta que ni aprezca el de editar

   }
  ngOnInit(): void {
    this.aboutService.getAboutList().subscribe(); 
  }

}
