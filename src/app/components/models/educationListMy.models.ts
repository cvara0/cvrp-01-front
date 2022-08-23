import { Education } from "./education.models";

export class EducationListMy{
    
    constructor(
        public educationListMy    : Education[]=[
            
            new Education(
                0,
                "Escuela Provincial de Educacion Tecnica",
                "Secundaria Orientada a Produccion de Bienes y Servicios",
                "Finalizada",
                "https://epet3obera.edu.ar",
                2002,
                2008,
                "https://netobera.com.ar/wp-content/uploads/2018/12/Epet-n-3-600x315@2x.jpg",
                `Es una excelente institucion, publica, gratuita, exigente y de alto nivel. 
                aprendi herramientas basicas para desenvolverme en la vida y universidadad, ademas de dejarme hermosos recuerdos`,
                "Secundario",
            ),
            new Education(
                1,
                "Universidad Nacional de Misiones",
                "Ingenieria Electromecanica",
                "Experiencia",
                "https://www.fio.unam.edu.ar/",
                2008,
                2012,
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Ingenieria-Universidad-Nacional-de-Misiones-Obera-1.JPG/1280px-Ingenieria-Universidad-Nacional-de-Misiones-Obera-1.JPG",
                `Es una excelente institucion, publica, gratuita, exigente y de alto nivel. 
                Deje la carrera en un momento de crisis academica, para explorar el mundo del disenio industrial, dada mi creatividad, inventiva y ganas de emprender y crear.`,
                "Universitario",
            ),
            new Education(
                2,
                "Universidad Nacional de Misiones",
                "Disenio Industrial",
                "Experiencia",
                "https://www.fayd.unam.edu.ar/",
                2012,
                2019,
                "https://i0.wp.com/elairedeintegracion.com.ar/wp-content/uploads/2022/02/thumbnail_IMG_0255.jpg?fit=640%2C427&ssl=1",
                `Es una excelente institucion, publica, gratuita, exigente y de alto nivel. 
                Deje la carrera en un momento de crisis academica, sentia que no podia encontrar el equilibrio entre mis habilidades y el futuro me era gris`,
                "Universitario",
            ),
            new Education(
                3,
                "Universidad Nacional de Misiones",
                "Ingenieria en Computacion",
                "Experiencia",
                "https://www.fio.unam.edu.ar/",
                2019,
                2022,
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Ingenieria-Universidad-Nacional-de-Misiones-Obera-1.JPG/1280px-Ingenieria-Universidad-Nacional-de-Misiones-Obera-1.JPG",
                `Es una excelente institucion, publica, gratuita, exigente y de alto nivel. 
                Por el momento hice una pausa en esa carrera para buscar empleo y capacitarme en el mundo del desarrollo de software.`,
                "Universitario",
            ),
            new Education(
                4,
                "Instituto Superior Santo Domingo",
                "Tec. Sup. en Desarrollo de Software ",
                "Cursando",
                "http://issd.edu.ar/",
                2020,
                2022,
                "https://yt3.ggpht.com/l3r6QwnGZ1tOcpqzKJWt6E8gt3P1F0BC5sVmNafheDgsqnkr_CKlZQsbKyKWQBsg7dxV5JCw=s900-c-k-c0x00ffffff-no-rj",
                `Es una excelente institucion, bien organizada y de filosofia autodidacta, inicie esta carrera en paralelo con ing. en computacion. 
                Actualmente me siento muy conforme con la misma y a poco de finalizarla, luego seguire estudiando y/o capacitandome en este campo.`,
                "Terciario",
            )
        ],//aca le relleno y le paso al array del servicio 
    ){

    }
}