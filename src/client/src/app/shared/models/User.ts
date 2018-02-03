export interface User{
    name: String;
    surname: String;
    email: String;
    password: String;
    role: String;
    image: String;
    valoracionPromedio: Number;
    valoraciones: [ any ];
    idService: String;
}