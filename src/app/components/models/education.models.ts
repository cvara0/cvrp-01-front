import { User } from "./user.models";

export class Education{
    
    constructor(
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
        public userId       : number=0 
    ){
        /*
        "name":"nombre",
    "carrer":"carrera",
    "status":"cursando",
    "web":"fsdfsdf",
    "yearSince":"2009",
    "yeartTo":"2020",
    "imageUrl":"fgdfgdfg",
    "description":"dfgfdgdfgfg2",
    "level":"dfgfdg2",
    "deleted":"false"
        */

    }
}