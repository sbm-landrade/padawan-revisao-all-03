//Componente responsável por gerenciar a lógica de exibição dos filmes. Contém o código para interagir com o serviço de filmes e atualizar o template com os dados recebidos.
import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../filme.service';
import { Filme } from '../filme.model';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {
  filmes: Filme[] = [];
  searchTerm: string = '';

  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos(): void {
    this.filmeService.listarTodos().subscribe(filmes => this.filmes = filmes);
  }
}
