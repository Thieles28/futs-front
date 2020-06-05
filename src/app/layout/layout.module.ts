import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { BodyComponent } from './body/body.component';
import { ClassificacaoComponent } from '../shared/classificacao/classificacao.component';
import { MaterialModule } from '../../material-modulo';

@NgModule({
  declarations: [
    NavbarComponent,
    MenuComponent,
    BodyComponent,
    ClassificacaoComponent
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    NavbarComponent,
    MenuComponent,
    BodyComponent,
    ClassificacaoComponent
  ]
})
export class LayoutModule {}
