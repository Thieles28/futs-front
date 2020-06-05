import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassificacaoComponent } from './classificacao/classificacao.component';

@NgModule({
  declarations: [ClassificacaoComponent],
  imports: [CommonModule],
  exports: [ClassificacaoComponent]
})
export class SharedModule {}
