import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassificacaoComponent } from './shared/classificacao/classificacao.component';
import { TimesComponent } from './shared/times/times.component';
import { CampeonatoComponent } from './shared/campeonato/campeonato.component';
import { LayoutComponent } from './layout/layout.component';
import { PaginaNaoEncontradaComponent } from './shared/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'classificacao', component: ClassificacaoComponent },
  { path: 'times', component: TimesComponent },
  { path: 'campeonato', component: CampeonatoComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
