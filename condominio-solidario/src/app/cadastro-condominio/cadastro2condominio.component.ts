import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { CadastroCondominio } from './cadastro-codominio';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Cadastro2Condominio extends CrudService<CadastroCondominio> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}CadastroCondominio`);
  }

  loadByID(id) {
    return null;
  }
}
