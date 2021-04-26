import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CadastroCondominio } from './cadastro-codominio';
import { tap, delay, take } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private readonly API = `${environment.backendBaseUri}cursos`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<CadastroCondominio[]>(this.API)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }

  loadByID(id) {
    return this.http.get<CadastroCondominio>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(CadastroCondominio) {
    return this.http.post(this.API, CadastroCondominio).pipe(take(1));
  }

  private update(CadastroCondominio) {
    return this.http.put(`${this.API}/${CadastroCondominio.id}`, CadastroCondominio).pipe(take(1));
  }

  save(CadastroCondominio) {
    if (CadastroCondominio.id) {
      return this.update(CadastroCondominio);
    }
    return this.create(CadastroCondominio);
  }

  remove(id) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}