import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { routing } from './app.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, CursosComponent, CursoDetalheComponent],
  imports: [BrowserModule, routing, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
