export interface Valoracion {
  _id?: string;
  numEvaluacion: number;
  comentario: string;
  idProvider: string;
  valoracionPromedio: Number;
  user: {
    name: String;
    surname: String;
    email: String;
    role: String;
    image: String;
    valoracionPromedio: Number;
    idService: String;
  };
}
