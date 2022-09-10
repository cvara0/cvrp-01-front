export class Skill{
    
    constructor(
        public id           : number=0,
        public name         : string='',
        public level        : number=0,
        public isHard         : boolean=false,
        public imageUrl     : string='',
        public web          : string='',
        public deleted      : boolean=false,
        public userId       : number=0
    ){

    }
}