import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Cadastro2CondominioComponent } from './cadastro-condominio/cadastro2condominio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Cadastro2CondominioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
