export class Product {
    constructor (
        public title : string,
        public description : string,
        public imageURL : string,
        public layout : string,
        public nbofkeys : number,
        public isRGB : boolean,
        public isWireless : boolean,
        public isMechanical : boolean,
        public price : number,
        public creationdate : Date

    ){}
}