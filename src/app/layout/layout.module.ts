import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { BodyComponent } from './body/body.component';
import { ClassificacaoComponent } from '../shared/classificacao/classificacao.component';
import { MaterialModule } from '../../material-modulo';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimeComponent } from '../shared/time/time.component';
import { CampeonatoComponent } from '../shared/campeonato/campeonato.component';
import { PaginaNaoEncontradaComponent } from '../shared/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NavbarComponent,
    MenuComponent,
    BodyComponent,
    ClassificacaoComponent,
    TimeComponent,
    CampeonatoComponent,
    PaginaNaoEncontradaComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    NavbarComponent,
    MenuComponent,
    BodyComponent,
    ClassificacaoComponent,
    TimeComponent,
    CampeonatoComponent,
    PaginaNaoEncontradaComponent,
  ],
})
export class LayoutModule {}
