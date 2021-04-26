import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CadastroCondominioComponent } from './cadastro-condominio/cadastro-condominio.component';


const appRoutes: Routes = [
   { path: '', component: HeaderComponent },
   { path: 'condominio', component: CadastroCondominioComponent },

   // otherwise redirect to home
   { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);