import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassificacaoComponent } from './shared/classificacao/classificacao.component';

const routes: Routes = [
  { path: 'classificacao', component: ClassificacaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
