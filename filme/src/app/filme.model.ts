//define a estrutura do objeto Filme, garantindo que os objetos filme funcionam de forma esperada
export interface Filme {
  id?: number;
  titulo: string;
  diretor: string;
  genero: string;
  ano: number;
}
