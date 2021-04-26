import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CadastroCondominioComponent } from './cadastro-condominio/cadastro-condominio.component';
import { routing } from './app.routing';
import { CrudService } from './cadastro-condominio/crud.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CadastroCondominioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [
    CrudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
