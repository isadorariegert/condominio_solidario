import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CadastroUsuario } from './cadastro-usuario';
import { tap, delay, take } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private readonly API = `${environment.backendBaseUri}cursos`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<CadastroUsuario[]>(this.API)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }

  loadByID(id) {
    return this.http.get<CadastroUsuario>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(CadastroUsuario) {
    return this.http.post(this.API, CadastroUsuario).pipe(take(1));
  }

  private update(CadastroUsuario) {
    return this.http.put(`${this.API}/${CadastroUsuario.id}`, CadastroUsuario).pipe(take(1));
  }

  save(CadastroUsuario) {
    if (CadastroUsuario.id) {
      return this.update(CadastroUsuario);
    }
    return this.create(CadastroUsuario);
  }

  remove(id) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}