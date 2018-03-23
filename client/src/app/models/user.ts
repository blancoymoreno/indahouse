export class User {
    constructor(
        public _id: string,
        public name: string,
        public surname: string,
        //public mlastname: string,
        //public sexo: string,
        //public bday: string,
        public email: string,
        //public mobile: string,
        public password: string,
        public role: string,
        public image: string
    ){}
}