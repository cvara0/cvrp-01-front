import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-link-btn',
  templateUrl: './navbar-link-btn.component.html',
})
export class NavbarLinkBtnComponent implements OnInit {


  @Input() pageName    : string="";
  @Input() pageImage   : string="";
  @Input() btnClass    : string="";

  constructor() { }

  ngOnInit(): void {
  }

  goTo(type:string){
    switch(type){
      case "ap":
        window.open('https://www.argentina.gob.ar/produccion/transformacion-digital-y-economia-del-conocimiento/argentina-programa');
      break;
      case "":
        //window.open('#');
      break;
      case "linkedin":
        window.open('https://www.linkedin.com/in/cvara0/');
      break;
      case "facebook":
        window.open('https://www.facebook.com/cvara.parra.39/');
      break;
      case "instagram":
        window.open('https://www.instagram.com/cvara0/');
      break;
      
    }
  }

}
