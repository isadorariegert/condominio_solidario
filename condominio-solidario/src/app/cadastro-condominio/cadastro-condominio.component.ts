import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';
import { CadastroCondominio } from './cadastro-codominio';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-listing',
  moduleId: module.id,
  templateUrl: 'cadastro-condominio.component.html'
})
export class CadastroCondominioComponent extends CrudService<CadastroCondominio> implements OnInit {
  
  private _url : string = `${environment.backendBaseUri}/condominio`;
  condominios: any[];
  constructor(protected http: HttpClient) {
    super(http, `${environment.backendBaseUri}/condominio`);
  }

  ngOnInit(): void {
    this.list().subscribe(result => {
      this.condominios = result;
    });  
  }
}
