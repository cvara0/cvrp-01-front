import { Component, OnInit } from '@angular/core';
import { Napro } from 'src/app/components/models/napro.models';


@Component({
  selector: 'app-name-profession',
  templateUrl: './name-profession.component.html'
})
export class NameProfessionComponent implements OnInit {

  naproList         : Napro[];
 
  constructor() {
 
    /*
        public name             : string="",
        public surname          : string="",
        public profession       : string="",
        public country          : string="",
      */

    this.naproList=[new Napro(
      'Cristian V.R.',
      'Parra',
      'Programador Full Stack',
      'Argentina' 
    )];

   }
  ngOnInit(): void {

  }


}
