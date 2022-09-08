export class Photo{
    
    constructor(
        public id           : number=0,
        public imageUrl     : string="",
        public deleted      : boolean=false,
        public userId       : number=0
    ){

    }
}