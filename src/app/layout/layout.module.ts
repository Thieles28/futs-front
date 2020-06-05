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
import { TimesComponent } from '../shared/times/times.component';
import { CampeonatoComponent } from '../shared/campeonato/campeonato.component';
import { PaginaNaoEncontradaComponent } from '../shared/pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MenuComponent,
    BodyComponent,
    ClassificacaoComponent,
    TimesComponent,
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
  ],
  exports: [
    NavbarComponent,
    MenuComponent,
    BodyComponent,
    ClassificacaoComponent,
    TimesComponent,
    CampeonatoComponent,
    PaginaNaoEncontradaComponent,
  ],
})
export class LayoutModule {}
