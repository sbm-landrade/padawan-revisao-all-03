import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filme } from './filme.model'; // Defina o modelo Filme

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private apiUrl = 'http://localhost:8080/api/filmes';

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Filme[]> {
    return this.http.get<Filme[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<Filme> {
    return this.http.get<Filme>(`${this.apiUrl}/${id}`);
  }

  salvar(filme: Filme): Observable<Filme> {
    return this.http.post<Filme>(this.apiUrl, filme);
  }

  atualizar(id: number, filme: Filme): Observable<Filme> {
    return this.http.put<Filme>(`${this.apiUrl}/${id}`, filme);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

