import { Education } from "./education.models";

export class EducationListMy{
    
    constructor(
        public educationList    : Education[]=[],//aca le relleno y le paso al array del servicio 
    ){

    }
}