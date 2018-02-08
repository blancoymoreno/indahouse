export interface Valoracion {
  _id?: string;
  numEvaluacion: number;
  comentario: string;
  idUserValorado: string;
  valoracionPromedio: number;
  user: {
    _id?: string;
    name: String;
    surname: String;
    email: String;
    role: String;
    image: String;
    valoracionPromedio: Number;
    idService: String;
  };
}
