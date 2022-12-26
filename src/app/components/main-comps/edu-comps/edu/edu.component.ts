import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/components/models/education.models';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html'
})
export class EduComponent implements OnInit {

  educationList         : Education[];
  
  listStyle    : string='hideContent';
  fadeStyle1    : string='animate__fadeInLeftBig';
  fadeStyle2    : string='animate__fadeInRightBig';
  isShow       : boolean=false;
  constructor() {
    
    /*
   
        public name         : string='',
        public carrer       : string='',
        public status       : string='',
        public web          : string='',
        public yearSince    : number=0,
        public yearTo       : number=0,
        public imageUrl     : string='',
        public description  : string='',
        public level        : string='',
      
    */

    this.educationList=[
      new Education(
        'Universidad Nacional de Misiones',
        'Ing. en Computacion',
        'Experiencia',
        'https://www.fio.unam.edu.ar/',
        2018,
        2020,
        'assets/images/education_images/unam_icon.png',
        'Excelente institución, exigente y de gran nivel, deje estos estudios para buscar empleo y otro camino dedicado exclusivamente al desarrollo de software.',
        'Universitario'
      ),
      new Education(
        'Instituto Superior Santo Domingio',
        'Tec. Sup. en Desarrollo de Software',
        'Finalizando',
        'https://issd.edu.ar/',
        2020,
        2023,
        'assets/images/education_images/issd_icon.png',
        'Excelente institución, con horarios flexibles se ajusta a mis necesidades, y el contenido es totalmente de mi interés.',
        'Terciario'
      ),
      new Education(
        'UTN Centro de e-Learning',
        `- Diplomatura en Python
         - Professional Testing Master
         - Diseño Gráfico Digital
         `,
        'Finalizado',
        'https://sceu.frba.utn.edu.ar/e-learning/',
        2019,
        2019,
        'assets/images/education_images/elearning_icon.png',
        'Fueron cursos que tomé cuando decidí dedicarme de lleno al desarrollo de software.',
        'Curso'
      ),
      new Education(
        'Instituto Nacional de Tecnología Industrial',
        `Argentina Programa: Desarrollador Web Full Stack Jr.`,
        'Finalizado',
        'https://www.argentina.gob.ar/economia/conocimiento/argentina-programa',
        2022,
        2022,
        'assets/images/education_images/ap_icon.png',
        'Fue un curso impulsado por el gobierno argentino, pertenecí a la 2da cohorte, me brindó algunas de las herramientas básicas para realizar este sitio.',
        'Curso'
      ),
      new Education(
        'Programa Nacional T.TEC junto a Egg Educacion',
        `Desarrollador Web Full Stack Jr.`,
        'Finalizado',
        'https://eggeducacion.com/es-AR/',
        2022,
        2022,
        'assets/images/education_images/egg_icon.png',
        'Fue un curso impulsado por el gobierno argentino, el mismo fue de mucho aprendizaje y también me sirvió para llevar a cabo este sitio.',
        'Curso'
      )
    ];

  }

  ngOnInit(): void {
  
  }
  
  show(){
    this.fadeStyle1 ='animate__fadeInLeftBig';
    this.fadeStyle2 ='animate__fadeInRightBig';
    if(!this.isShow){
      this.listStyle="showContent";
      this.isShow=!this.isShow;
    }
    else
      this.hide();
  }

  hide(){
    this.isShow=!this.isShow;
    this.fadeStyle1 ='animate__fadeOutLeftBig';
    this.fadeStyle2 ='animate__fadeOutRightBig';
    setTimeout(() => {this.listStyle="hideContent";}, 500);
  }
  

}
