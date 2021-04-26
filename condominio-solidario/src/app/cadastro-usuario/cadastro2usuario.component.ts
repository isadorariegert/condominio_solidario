import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { CadastroUsuario } from './cadastro-usuario';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Cadastro2Usuario extends CrudService<CadastroUsuario> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.backendBaseUri}CadastroUsuario`);
  }

  loadByID(id) {
    return null;
  }
}
