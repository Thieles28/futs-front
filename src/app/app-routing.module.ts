import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassificacaoComponent } from './shared/classificacao/classificacao.component';
import { TimeComponent } from './shared/time/time.component';
import { CampeonatoComponent } from './shared/campeonato/campeonato.component';
import { PaginaNaoEncontradaComponent } from './shared/pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  { path: 'classificacao', component: ClassificacaoComponent },
  { path: 'times', component: TimeComponent },
  { path: 'campeonato', component: CampeonatoComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PaginaNaoEncontradaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
