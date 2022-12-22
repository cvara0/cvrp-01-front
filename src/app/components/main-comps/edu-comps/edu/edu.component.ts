import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/components/models/education.models';
import { Year } from 'src/app/components/models/year.models';
import { EditService } from 'src/app/services/edit.service';
import { EducationService } from 'src/app/services/edu.service';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html'
})
export class EduComponent implements OnInit {

  educationList         : Education[];
  isEditAll             : boolean;
  constructor(private educationService:EducationService,private editService:EditService) {
    this.educationService.getEducationList();
    /*
    public id           : number=0,
        public name         : string='',
        public carrer       : string='',
        public status       : string='',
        public web          : string='',
        public yearSince    : number=0,
        public yearTo       : number=0,
        public imageUrl     : string='',
        public description  : string='',
        public level        : string='',
        public deleted      : boolean=false,
        public userId
    */

    this.educationList=[
      new Education(
        1,
        'Universidad Nacional de Misiones',
        'Ing. en Computacion',
        'Experiencia',
        'https://www.fio.unam.edu.ar/',
        2018,
        2020,
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Ingenieria-Universidad-Nacional-de-Misiones-Obera-1.JPG/250px-Ingenieria-Universidad-Nacional-de-Misiones-Obera-1.JPG',
        'Excelente institución, exigente y de gran nivel, deje estos estudios para buscar empleo y otro camino dedicado exclusivamente al desarrollo de software.',
        'Universitario',
        false,
        1
      ),
      new Education(
        2,
        'Instituto Superior Santo Domingio',
        'Tec. Sup. en Desarrollo de Software',
        'Finalizando',
        'https://issd.edu.ar/',
        2020,
        2023,
        'https://www.universidades.com.ar/logos/original/logo-instituto-superior-santo-domingo.png',
        'Excelente institución, con horarios flexibles se ajusta a mis necesidades, y el contenido es totalmente de mi interés.',
        'Terciario',
        false,
        1
      ),
      new Education(
        3,
        'UTN Centro de e-Learning',
        `- Diplomatura en Python
         - Professional Testing Master
         - Diseño Gráfico Digital
         `,
        'Finalizado',
        'https://sceu.frba.utn.edu.ar/e-learning/',
        2019,
        2019,
        'https://yt3.ggpht.com/ytc/AMLnZu-mbEw754q4d4ECHd0GUBRKnAT_oesGZcHvK_0utA=s900-c-k-c0x00ffffff-no-rj',
        'Fueron cursos que tomé cuando decidí dedicarme de lleno al desarrollo de software.',
        'Curso',
        false,
        1
      ),
      new Education(
        4,
        'Instituto Nacional de Tecnología Industrial',
        `Argentina Programa: Desarrollador Web Full Stack Jr.`,
        'Finalizado',
        'https://www.argentina.gob.ar/economia/conocimiento/argentina-programa',
        2022,
        2022,
        'https://i.postimg.cc/2860Tdf2/ap-logo-circular.png',
        'Fue un curso impulsado por el gobierno argentino, pertenecí a la 2da cohorte, me brindó algunas de las herramientas básicas para realizar este sitio.',
        'Curso',
        false,
        1
      ),
      new Education(
        5,
        'Programa Nacional T.TEC junto a Egg Educacion',
        `Desarrollador Web Full Stack Jr.`,
        'Finalizado',
        'https://eggeducacion.com/es-AR/',
        2022,
        2022,
        'https://images.squarespace-cdn.com/content/v1/56250c0de4b058efb0c7c62c/1537234883576-Z1CU3FZSHG9PGDXXMYOI/Screen+Shot+2018-09-17+at+10.39.43+PM.png?format=1500w',
        'Fue un curso impulsado por el gobierno argentino, el mismo fue de mucho aprendizaje y también me sirvió para llevar a cabo este sitio.',
        'Curso',
        false,
        1
      )

    ];

    /*this.educationService.getEducationList$().subscribe(educationList=>{
    this.educationList=educationList;
    });*/
    this.isEditAll=sessionStorage.getItem("editMode")=="true"&&sessionStorage.getItem("userId")==this.editService.userId?true:false;
  }

  ngOnInit(): void {
    this.educationService.getEducationList().subscribe();
  }

}
