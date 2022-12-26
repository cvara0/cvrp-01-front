import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/components/models/about.models';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  aboutList         : About[];

  constructor() {
    
    this.aboutList=[new About(
      `Mi camino se resume en la búsqueda del equilibrio entre lógica y creatividad, pude encontrarlo en el desarrollo de software.
      
      Disfruto lo que hago, buscar, pensar y hallar soluciones, aportando al crecimiento de nuevos emprendedores.`,
      
      )];

   }
  ngOnInit(): void {
 
  }

}
