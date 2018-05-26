export class User {
    constructor(
        public _id: string,
        public name: string,
        public surname: string,
        public mlastname: string,
        public sexo: string,
        public bday: string,
        public email: string,
        public mobile: string,
        public estudios: string,
        public region: string,
        public cuidad: string,
        public avdireccion: string,
        public ndireccion: string,
        public deptodireccion: string,
        public pagoservicio: string,
        public ofreservicio: string,
        public password: string,
        public role: string,
        public image: string,
        public categoriaServicio: string,
        public presentacion: string,
        public valoracionPromedio: Number,
        public valoraciones: [ any ],
        public servicio: string
    ){}
}