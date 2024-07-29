import { Pipe, PipeTransform } from '@angular/core';
import { Filme } from '../filme.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Filme[], searchTerm: string): Filme[] {
    // Se não houver items, retorna uma lista vazia
    if (!items) return [];
    // Se não houver termo de busca, retorna a lista original
    if (!searchTerm) return items;

    // Converte o termo de busca para minúsculas
    searchTerm = searchTerm.toLowerCase();

    // Filtra a lista de filmes com base no termo de busca
    return items.filter(item => {
      // Verifica se o termo de busca está contido em qualquer um dos campos do filme
      return item.titulo.toLowerCase().includes(searchTerm) ||
             item.diretor.toLowerCase().includes(searchTerm) ||
             item.genero.toLowerCase().includes(searchTerm) ||
             item.ano.toString().includes(searchTerm);
    });
  }
}
