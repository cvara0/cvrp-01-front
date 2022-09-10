export class Project{
    
    constructor(
        public id           : number=0,
        public name         : string='',
        public web          : string='',
        public date         : string='',
        public imageUrl     : string='',
        public description  : string='',
        public deleted      : boolean=false,
        public userId       : number=0 
    ){

    }
}